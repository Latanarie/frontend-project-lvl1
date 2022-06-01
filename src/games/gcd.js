import rules from '../index.js';
import randomNumber from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

const greatestCommonDiviser = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const gsdQuestion = `${firstNumber} ${secondNumber}`;
  let smallestNumber = (firstNumber > secondNumber) ? secondNumber : firstNumber;
  let biggestNumber = (firstNumber > secondNumber) ? firstNumber : secondNumber;
  let remainder = biggestNumber % smallestNumber;
  while (remainder > 0) {
    biggestNumber = smallestNumber;
    smallestNumber = remainder;
    remainder = biggestNumber % smallestNumber;
  }
  return [gsdQuestion, String(smallestNumber)];
};

const gameLaunch = () => {
  rules(question, greatestCommonDiviser);
};

export default gameLaunch;
