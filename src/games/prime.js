import generateGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const randomNumber = getRandomNumber(1, 100);
  const primeQuestion = String(randomNumber);
  const primeResult = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [primeQuestion, primeResult];
};

const gameLaunch = () => {
  generateGame(rule, primeNumber);
};

export default gameLaunch;
