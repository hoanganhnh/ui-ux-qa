import { FC, ReactElement, useContext, useEffect } from "react";
import { QuizContext, allowedActions } from "../../contexts/QuizContext";
import { getStarsIcons } from "../../helpers/getIcons";
import FlipNumbers from "react-flip-numbers";
import { playSound } from "../../helpers/playSound";
import i18n from "../../helpers/i18n";

export interface Sound {
  audio: HTMLAudioElement;
  volume: number;
}

export const ShowResult: FC = (): ReactElement => {
  const quizContext = useContext(QuizContext);
  const dispatch = quizContext?.dispatch;
  const totalQuestions = quizContext!.state.questions.length;
  const correctAnswers = quizContext!.state.assertedAnswersCount;
  const score = quizContext?.state.score;
  const flipDuration = 2; // Change duration of flip animation

  const calcAssertPercetage = () => {
    const assertPercetage = (correctAnswers * 100) / totalQuestions;
    return assertPercetage;
  };

  if (calcAssertPercetage() > 49) {
    playSound("win"); // Play win sound if score is above than 49
  } else {
    playSound("fail"); // Play fail sound if score is below than 49
  }

  useEffect(() => {
    // Play win sound if score is above than 49
    // Play fail sound if score is below than 49

    // Reset game when press Enter
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        dispatch &&
          dispatch({ type: allowedActions.RESET_GAME, payload: null });
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch]);

  return (
    <div className="result-wrap">
      <div className="result-body container">
        <small className="stars-wrap">
          {getStarsIcons(calcAssertPercetage())}
        </small>

        <div className="score-wrap">
          <small className="score-amount">
            <FlipNumbers
              height={40}
              width={28}
              color="black"
              background="white"
              play
              numbers={score ? score.toString() : "0"}
              duration={flipDuration}
            />
          </small>
        </div>

        <span>
          {correctAnswers}/{totalQuestions}
        </span>
      </div>

      <div className="bottom">
        <div className="container">
          <button
            className="reset-btn"
            onClick={() =>
              dispatch &&
              dispatch({ type: allowedActions.RESET_GAME, payload: null })
            }
          >
            {i18n.t("playAgain")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
