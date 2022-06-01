import generateRules from '../index.js';
import randomNumber from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const evenNumber = () => {
  const whichNumber = randomNumber(0, 100);
  const evenQuestion = String(whichNumber);
  const evenResult = isEvenNumber(whichNumber) ? 'yes' : 'no';
  return [evenQuestion, evenResult];
};

const gameLaunch = () => {
  generateRules(question, evenNumber);
};

export default gameLaunch;
