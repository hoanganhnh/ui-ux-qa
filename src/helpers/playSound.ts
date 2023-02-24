export const playSound = (sound: string) => {
  stopSounds();
  const audio = document.getElementById(sound) as HTMLAudioElement;
  if (!audio) return;
  audio.play();
};

export const stopSounds = () => {
  const quizAudios = document.getElementById("quizAudios");
  quizAudios?.querySelectorAll("audio").forEach((audio) => {
    if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
};
