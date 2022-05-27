import * as rules from '../index.js';

const question = 'What number is missing in the progression?';

const createProgression = () => {
  const sizeOfProgression = rules.randomNumber(5, 10);
  const step = rules.randomNumber(1, 10);
  const firstNumber = rules.randomNumber(0, 100);
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
  rules.generalRules(question, progressionGame);
};

export default gameLaunch;
