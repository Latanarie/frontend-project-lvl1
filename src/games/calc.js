import generateGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const randomOperator = (array) => {
  const index = getRandomNumber(0, array.length - 1);
  return array[index];
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const operator = randomOperator(operators);
  const calcQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const calcResult = String(calculate(firstNumber, secondNumber, operator));
  return [calcQuestion, calcResult];
};

const gameLaunch = () => {
  generateGame(rule, calcGame);
};

export default gameLaunch;
