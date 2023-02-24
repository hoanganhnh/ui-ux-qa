import { FC, ReactElement, useContext, useEffect } from "react";
import Answer from "./Answer";
import { QuizContext, allowedActions } from "../../contexts/QuizContext";
import i18n from "../../helpers/i18n";

const Question: FC = (): ReactElement => {
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  const currentQuestion =
    quizContext?.state.questions[quizContext.state.currentQuestionIndex];
  const currentQuestionAnswers = quizContext?.state.currentQuestionAnswers;
  const answers = quizContext?.state.currentQuestionAnswers;
  const selectedAnswer = quizContext?.state.selectedAnswer;
  const correctAnswer = quizContext?.state.correctAnswer;
  const helpChances = quizContext!.state.helpChances;
  const askedHelp = quizContext?.state.askedHelp;
  const currentIndex = quizContext?.state.currentQuestionIndex;
  const questions = quizContext?.state.questions;
  const isLast = currentIndex === questions!.length - 1;
  // const helpDisabled = helpChances <= 0 ? "help-disabled disabled" : null;
  const helpDisabled =
    helpChances <= 0 || selectedAnswer || askedHelp
      ? "help-disabled disabled"
      : null;

  // Add event listener for keyup event on mount
  useEffect(() => {
    // Key up event handler for keyboard shortcuts
    // h: help
    // ArrowRight: next question
    // a, b, c, d: select answer
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "h") {
        event.preventDefault();
        if (helpChances > 0) {
          dispatch &&
            dispatch({ type: allowedActions.ASK_HELP, payload: null });
        }
      }
      if (event.key === "ArrowRight") {
        dispatch &&
          dispatch({ type: allowedActions.NEXT_QUESTION, payload: null });
      }

      if (
        event.key === "a" ||
        event.key === "b" ||
        event.key === "c" ||
        event.key === "d"
      ) {
        if (dispatch && !selectedAnswer) {
          let payload = null;
          switch (event.key) {
            case "a":
              payload = currentQuestionAnswers![0];
              break;
            case "b":
              payload = currentQuestionAnswers![1];
              break;
            case "c":
              payload = currentQuestionAnswers![2];
              break;
            case "d":
              payload = currentQuestionAnswers![3];
              break;
          }
          dispatch && dispatch({ type: allowedActions.SELECT_ANSWER, payload });
        }
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch, currentQuestionAnswers, helpChances, selectedAnswer]);

  return (
    <>
      <div className="question-wrap container">
        <p className="question-text">{currentQuestion?.question}</p>

        <div className="answers">
          {answers?.map((answer, index) => (
            <Answer
              answer={answer}
              key={index}
              index={index}
              onSelectAnswer={(answer) => {
                dispatch &&
                  dispatch({
                    type: allowedActions.SELECT_ANSWER,
                    payload: answer,
                  });
              }}
              selectedAnswer={selectedAnswer}
              correctAnswer={correctAnswer}
              askedHelp={askedHelp}
            />
          ))}
        </div>
        {selectedAnswer ? (
          <p className="question-explain">{currentQuestion?.explain}</p>
        ) : null}
      </div>

      <div className="bottom">
        <div className="action-btns-wrap">
          <div
            className={`help-btn action-btn ${helpDisabled}`}
            onClick={() => {
              dispatch &&
                dispatch({ type: allowedActions.ASK_HELP, payload: null });
            }}
          >
            <span className="action-btn-text">{i18n.t("helpButton")}</span>
            <span className="help-chances">{helpChances}</span>
          </div>

          <div
            className={`next-btn action-btn ${isLast ? `last-btn` : ``}`}
            onClick={() =>
              dispatch &&
              dispatch({ type: allowedActions.NEXT_QUESTION, payload: null })
            }
          >
            <span className="action-btn-text">
              {isLast ? i18n.t("endButtonText") : i18n.t("nextButtonText")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
