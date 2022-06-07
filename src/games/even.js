import rule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const evenNumber = () => {
  const randomNumber = getRandomNumber(0, 100);
  const evenQuestion = String(randomNumber);
  const evenResult = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [evenQuestion, evenResult];
};

const gameLaunch = () => {
  rule(description, evenNumber);
};

export default gameLaunch;
