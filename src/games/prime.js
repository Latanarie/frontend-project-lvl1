import generateRules from '../index.js';
import randomNumber from '../utils.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  let result = true;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const primeNumber = () => {
  const whichNumber = randomNumber(0, 100);
  const primeQuestion = String(whichNumber);
  const primeResult = isPrimeNumber(whichNumber) ? 'yes' : 'no';
  return [primeQuestion, primeResult];
};

const gameLaunch = () => {
  generateRules(question, primeNumber);
};

export default gameLaunch;
