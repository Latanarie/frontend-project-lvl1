import generateRules from '../index.js';
import randomNumber from '../utils.js';

const question = 'What number is missing in the progression?';

const createProgressionArguments = () => {
  const sizeOfProgression = randomNumber(5, 10);
  const stepOfProgression = randomNumber(1, 10);
  const firstNumber = randomNumber(0, 100);
  return [sizeOfProgression, stepOfProgression, firstNumber];
};

const createProgression = () => {
  const [size, step, begin] = createProgressionArguments();
  let progression = [begin];
  while (progression.length < size) {
    const newElement = progression[progression.length - 1] + step;
    progression = [...progression, newElement];
  }
  return progression;
};

const progressionGame = () => {
  const arrayOfProgression = createProgression();
  const missingElement = randomNumber(0, arrayOfProgression.length);
  const progressionResult = arrayOfProgression[missingElement];
  arrayOfProgression[missingElement] = '..';
  const progressionQuestion = `${arrayOfProgression.join(' ')}`;
  return [progressionQuestion, String(progressionResult)];
};

const gameLaunch = () => {
  generateRules(question, progressionGame);
};

export default gameLaunch;
