import { useContext } from "react";
import Header from "./components/Header";
import ShowResult from "./components/Result";
import Question from "./components/Question";
import { QuizContext } from "../contexts/QuizContext";
import Audios from "./components/Audios";

export interface Sound {
  audio: HTMLAudioElement;
  volume: number;
}

const QuizCore: React.FC = (): React.ReactElement => {
  const quizContext = useContext(QuizContext);
  const gameOver = quizContext?.state.gameOver;

  return (
    <>
      <Audios></Audios>
      {gameOver && <ShowResult />}
      {!gameOver && (
        <>
          <Header />
          <Question />
        </>
      )}
    </>
  );
};

export default QuizCore;
