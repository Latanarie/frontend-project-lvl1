import generateGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDiviser = (number1, number2) => {
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2)
  if (max % min === 0) {
    return min;
  }
  return getGreatestCommonDiviser(min, max % min);
};

const greatestCommonDiviser = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const gsdQuestion = `${firstNumber} ${secondNumber}`;
  const gsdResult = getGreatestCommonDiviser(firstNumber, secondNumber);
  return [gsdQuestion, String(gsdResult)];
};

const gameLaunch = () => {
  generateGame(rule, greatestCommonDiviser);
};

export default gameLaunch;
