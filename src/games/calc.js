import generateRules from '../index.js';
import randomNumber from '../utils.js';

const arrayOfSymbol = ['+', '-', '*'];

const randomSymbol = (array) => {
  const index = randomNumber(0, array.length - 1);
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
      throw new Error('Unknown operator!');
  }
};

const question = 'What is the result of the expression?';

const calcGame = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const symbol = randomSymbol(arrayOfSymbol);
  const calcQuestion = `${firstNumber} ${symbol} ${secondNumber}`;
  const calcResult = String(calculate(firstNumber, secondNumber, symbol));
  return [calcQuestion, calcResult];
};

const gameLaunch = () => {
  generateRules(question, calcGame);
};

export default gameLaunch;
