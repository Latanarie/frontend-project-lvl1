import * as rules from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeNumber = () => {
  const whichNumber = rules.randomNumber(0, 100);
  const primeQuestion = `${whichNumber}`;
  let result = true;
  for (let i = 2; i <= whichNumber / 2; i += 1) {
    if (whichNumber % i === 0) {
      result = false;
      break;
    }
  }
  const primeResult = (result) ? 'yes' : 'no';
  return [primeQuestion, primeResult];
};

const gameLaunch = () => {
  rules.generalRules(question, primeNumber);
};

export default gameLaunch;
