import rules from '../index.js';
import randomNumber from '../utils.js';

const question = 'What number is missing in the progression?';

const createProgression = () => {
  const sizeOfProgression = randomNumber(5, 10);
  const step = randomNumber(1, 10);
  const firstNumber = randomNumber(0, 100);
  let progression = [firstNumber];
  while (progression.length <= sizeOfProgression) {
    const newElement = progression[progression.length - 1] + step;
    progression = [...progression, newElement];
  }
  return progression;
};

const progressionGame = () => {
  const arrayOfProgression = createProgression();
  const missingElement = Math.floor(Math.random() * arrayOfProgression.length);
  const progressionResult = arrayOfProgression[missingElement];
  arrayOfProgression[missingElement] = '..';
  const progressionQuestion = `${arrayOfProgression.join(' ')}`;
  return [progressionQuestion, String(progressionResult)];
};

const gameLaunch = () => {
  rules(question, progressionGame);
};

export default gameLaunch;
