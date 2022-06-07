import rule from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDiviser = (number1, number2) => {
  const sign = Math.sign(number1 - number2);
  if (sign === -1) {
    return getGreatestCommonDiviser(number2, number1);
  }
  if (number1 % number2 === 0) {
    return number2;
  }
  return getGreatestCommonDiviser(number2, number1 % number2);
};

const greatestCommonDiviser = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const gsdQuestion = `${firstNumber} ${secondNumber}`;
  const gsdResult = getGreatestCommonDiviser(firstNumber, secondNumber);
  return [gsdQuestion, String(gsdResult)];
};

const gameLaunch = () => {
  rule(description, greatestCommonDiviser);
};

export default gameLaunch;
