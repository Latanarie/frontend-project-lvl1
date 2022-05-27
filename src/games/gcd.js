import * as rules from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const greatestCommonDiviser = () => {
  const firstNumber = rules.randomNumber(1, 100);
  const secondNumber = rules.randomNumber(1, 100);
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
  rules.generalRules(question, greatestCommonDiviser);
};

export default gameLaunch;
