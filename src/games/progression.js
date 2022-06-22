import generateGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const createProgression = (size, step, begin) => {
  let progression = [begin];
  let newElement;
  while (progression.length < size) {
    newElement = progression[progression.length - 1] + step;
    progression = [...progression, newElement];
  }
  return progression;
};

const progressionGame = () => {
  const size = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber(0, 100);
  const arithmeticProgression = createProgression(size, step, firstNumber);
  const missingElement = getRandomNumber(0, arithmeticProgression.length - 1);
  const progressionResult = arithmeticProgression[missingElement];
  arithmeticProgression[missingElement] = '..';
  const progressionQuestion = arithmeticProgression.join(' ');
  return [progressionQuestion, String(progressionResult)];
};

const gameLaunch = () => {
  generateGame(rule, progressionGame);
};

export default gameLaunch;
