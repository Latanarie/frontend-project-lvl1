import generateRules from '../index.js';
import randomNumber from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDiviser = (number1, number2) => {
  let smallestNumber = (number1 > number2) ? number2 : number1;
  let biggestNumber = (number1 > number2) ? number1 : number2;
  let remainder = biggestNumber % smallestNumber;
  while (remainder > 0) {
    biggestNumber = smallestNumber;
    smallestNumber = remainder;
    remainder = biggestNumber % smallestNumber;
  }
  return smallestNumber;
};

const greatestCommonDiviser = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const gsdQuestion = `${firstNumber} ${secondNumber}`;
  const gsdResult = getGreatestCommonDiviser(firstNumber, secondNumber);
  return [gsdQuestion, String(gsdResult)];
};

const gameLaunch = () => {
  generateRules(question, greatestCommonDiviser);
};

export default gameLaunch;
