import React from "react";

function Audios() {
  return (
    <div id="quizAudios">
      <audio preload="auto" id="win" src="audios/WIN.mp3"></audio>
      <audio preload="auto" id="fail" src="audios/FAIL.mp3"></audio>
      <audio preload="auto" id="help" src="audios/HELP.mp3"></audio>
      <audio preload="auto" id="correct" src="audios/CORRECT.mp3"></audio>
      <audio preload="auto" id="wrong" src="audios/WRONG.mp3"></audio>
    </div>
  );
}

export default Audios;
