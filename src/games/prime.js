import rule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const randomNumber = getRandomNumber(2, 100);
  const primeQuestion = String(randomNumber);
  const primeResult = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [primeQuestion, primeResult];
};

const gameLaunch = () => {
  rule(description, primeNumber);
};

export default gameLaunch;
