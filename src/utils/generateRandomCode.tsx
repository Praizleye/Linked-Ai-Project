const minDur = 5;
const maxDur = 15;
export const generateRandomDuration = () => {
  return Math.floor(Math.random() * (maxDur - minDur + 1)) + minDur;
};

export const generateRandomGlowValues = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const valX = [] as number[];
export const valY = [] as number[];
export const generateRandomMovement = () => {
  for (let i = 0; i < 10; i++) {
    const genX = generateRandomGlowValues(50, 150) as number;
    const genY = generateRandomGlowValues(-50, 50) as number;

    valX.push(genX);
    valY.push(genY);
  }
};
generateRandomMovement();
