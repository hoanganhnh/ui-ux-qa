import { Questions as questionsData, Question } from "../data/quizData";
import { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import { shuffleArray } from "../helpers/shuffleArray";
import { playSound, stopSounds } from "../helpers/playSound";
import i18n from "../helpers/i18n";

export enum allowedActions {
  NEXT_QUESTION,
  SELECT_ANSWER,
  RESET_GAME,
  ASK_HELP,
  CHANGE_LANGUAGE,
  LANG_MENU,
}

export type Action = { type: allowedActions; payload: string | null };

export type Dispatch = (action: Action) => void;

export const QuizContext = createContext<{
  state: StateInterface;
  dispatch: Dispatch;
} | null>(null);

interface StateInterface {
  questions: Array<Question>;
  currentQuestionIndex: number;
  currentQuestionAnswers: Array<string>;
  correctAnswer: string | undefined;
  selectedAnswer: string | null;
  assertedAnswersCount: number;
  helpChances: number;
  askedHelp: boolean;
  life: number;
  score: number;
  gameOver: boolean;
  language: string;
  answerOrder: Array<number>;
  langMenu: boolean;
}

var questions = shuffleArray(questionsData["en"]);
var shuffledAnswers = shuffleArray([
  ...questions[0]!.wrongAnswers,
  questions[0]!.correctAnswer,
]);
var order = getOrder(
  [...questions[0]!.wrongAnswers, questions[0]!.correctAnswer],
  shuffledAnswers
);

const initialState: StateInterface = {
  questions,
  currentQuestionIndex: 0,
  currentQuestionAnswers: shuffledAnswers,
  correctAnswer: questions[0]?.correctAnswer,
  selectedAnswer: null,
  assertedAnswersCount: 0,
  helpChances: 3,
  askedHelp: false,
  life: 3,
  score: 0,
  gameOver: false,
  language: "en",
  answerOrder: order,
  langMenu: false,
};

function getOrder(original: Array<string>, shuffled: Array<string>) {
  const order = [];
  for (let i = 0; i < original.length; i++) {
    order.push(original.indexOf(shuffled[i]));
  }
  return order;
}

function getScore() {
  const score: number = Math.floor(Math.random() * (200 - 100) + 100);
  return score;
}

function changeLanguage(target: string | null, state: StateInterface) {
  if (target === null) return state;
  i18n.changeLanguage(target!);
  var newQuestions = [...state.questions];
  if (state.questions[0]) {
    for (let i = 0; i < state.questions.length; i++) {
      newQuestions[i] = questionsData[target!].filter(
        (question) => question.id === state.questions[i].id
      )[0];
    }
  } else {
    state.questions = questionsData[target!];
  }
  var currentQuestionAnswers: Array<string> = [];
  var allAnswers = [
    ...newQuestions[state.currentQuestionIndex]!.wrongAnswers,
    newQuestions[state.currentQuestionIndex]!.correctAnswer,
  ];
  for (let i = 0; i < state.answerOrder.length; i++) {
    currentQuestionAnswers.push(allAnswers[state.answerOrder[i]]);
  }

  const correctAnswer = newQuestions[state.currentQuestionIndex]?.correctAnswer;
  var selectedAnswer: string | null = null;
  if (state.selectedAnswer) {
    let currentIndex = [
      ...state.questions[state.currentQuestionIndex].wrongAnswers,
      state.questions[state.currentQuestionIndex].correctAnswer,
    ].indexOf(state.selectedAnswer);
    selectedAnswer = [
      ...newQuestions[state.currentQuestionIndex].wrongAnswers,
      newQuestions[state.currentQuestionIndex].correctAnswer,
    ][currentIndex];
  }

  const explain = newQuestions[state.currentQuestionIndex]?.explain;
  localStorage.setItem(
    "quiz-state",
    JSON.stringify({
      ...state,
      questions: newQuestions,
      language: target!,
      currentQuestionAnswers,
      correctAnswer,
      explain,
      selectedAnswer,
    })
  );
  return {
    ...state,
    questions: newQuestions,
    language: target!,
    currentQuestionAnswers,
    correctAnswer,
    explain,
    selectedAnswer,
  };
}

function QuizReducer(state: StateInterface, action: Action) {
  switch (action.type) {
    case allowedActions.LANG_MENU: {
      return {
        ...state,
        langMenu: action.payload === "true" ? true : false,
      };
    }

    case allowedActions.CHANGE_LANGUAGE: {
      if (action.payload === state.language) return state;
      console.log("Changing language to " + action.payload);
      return changeLanguage(action.payload, state);
    }

    case allowedActions.NEXT_QUESTION: {
      const gameOver =
        state.questions.length - 1 === state.currentQuestionIndex
          ? true
          : false;

      const currentQuestionIndex = gameOver
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const currentQuestionAnswers = gameOver
        ? []
        : shuffleArray([
            ...state.questions[state.currentQuestionIndex + 1]!.wrongAnswers,
            state.questions[state.currentQuestionIndex + 1]!.correctAnswer,
          ]);
      let answerOrder: Array<number> = [];
      if (
        currentQuestionAnswers.length !== 0 &&
        state.questions[state.currentQuestionIndex + 1]
      ) {
        answerOrder = getOrder(
          [
            ...state.questions[state.currentQuestionIndex + 1]?.wrongAnswers,
            state.questions[state.currentQuestionIndex + 1]?.correctAnswer,
          ],
          currentQuestionAnswers
        );
      }
      const correctAnswer =
        state.questions[state.currentQuestionIndex + 1]?.correctAnswer;

      const askedHelp = false;

      const explain = state.questions[state.currentQuestionIndex + 1]?.explain;

      return {
        ...state,
        currentQuestionAnswers,
        currentQuestionIndex,
        correctAnswer,
        selectedAnswer: null,
        askedHelp,
        gameOver,
        explain,
        answerOrder,
      };
    }

    case allowedActions.SELECT_ANSWER: {
      const selectedAnswer = action.payload;

      if (state.selectedAnswer) return state;

      const assertedAnswersCount =
        state.questions[state.currentQuestionIndex]?.correctAnswer ===
        selectedAnswer
          ? state.assertedAnswersCount + 1
          : state.assertedAnswersCount;
      if (
        state.questions[state.currentQuestionIndex]?.correctAnswer ===
        selectedAnswer
      ) {
        playSound("correct");
      } else {
        playSound("wrong");
      }

      const score =
        state.questions[state.currentQuestionIndex]?.correctAnswer ===
        selectedAnswer
          ? state.score + getScore()
          : state.score;

      const life =
        state.questions[state.currentQuestionIndex]?.correctAnswer !==
        selectedAnswer
          ? state.life - 1
          : state.life;

      const gameOver = life <= 0 ? true : state.gameOver;

      return {
        ...state,
        selectedAnswer,
        assertedAnswersCount,
        askedHelp: false,
        score,
        life,
        gameOver,
      };
    }

    case allowedActions.ASK_HELP: {
      playSound("help");

      const helpChances =
        state.helpChances &&
        !state.askedHelp &&
        !state.selectedAnswer &&
        state.helpChances > 0
          ? state.helpChances - 1
          : state.helpChances;

      return {
        ...state,
        helpChances,
        askedHelp: true,
      };
    }

    case allowedActions.RESET_GAME: {
      stopSounds();
      questions = shuffleArray(questionsData[state.language]);
      return changeLanguage(state.language, {
        ...initialState,
        questions,
      });
    }
    default:
      return state;
  }
}

const updateLocalStorage = (state: StateInterface) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("quiz-state", JSON.stringify(state));
  }
};

const middleware = (state: StateInterface, action: Action) => {
  const reducerResult = QuizReducer(state, action);
  updateLocalStorage(reducerResult);
  return reducerResult;
};

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const localData = localStorage.getItem("quiz-state");
    if (localData && JSON.parse(localData!).language)
      i18n.changeLanguage(JSON.parse(localData!).language);
    return localData ? JSON.parse(localData) : initialState;
  }
  return initialState;
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(middleware, getInitialState());

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
