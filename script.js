function playSound(sound) {
    const audio = new Audio(`${sound}.wav`);
    audio.play();
  }
  