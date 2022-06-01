import rules from '../index.js';
import randomNumber from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = () => {
  const whichNumber = randomNumber(0, 100);
  const evenQuestion = `${whichNumber}`;
  const evenResult = (whichNumber % 2 === 0) ? 'yes' : 'no';
  return [evenQuestion, evenResult];
};

const gameLaunch = () => {
  rules(question, evenNumber);
};

export default gameLaunch;
