import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#c084fc', '#818cf8', '#38bdf8', '#ec4899']
    });
  } catch {
    // Graceful fallback if canvas is restricted
  }
};

export const triggerAchievementConfetti = () => {
  try {
    const end = Date.now() + 1000;
    const colors = ['#a855f7', '#6366f1', '#38bdf8'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Graceful fallback
  }
};
