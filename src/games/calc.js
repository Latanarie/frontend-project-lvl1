import * as rules from '../index.js';

const arrayOfSymbol = ['+', '-', '*'];
const randomSymbol = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: break;
  }
};

const question = 'What is the result of the expression?';

const calcGame = () => {
  const firstNumber = rules.randomNumber();
  const secondNumber = rules.randomNumber();
  const symbol = randomSymbol(arrayOfSymbol);
  const calcQuestion = `${firstNumber} ${symbol} ${secondNumber}`;
  const calcResult = String(calculate(firstNumber, secondNumber, symbol));
  return [calcQuestion, calcResult];
};

const gameLaunch = () => {
  rules.generalRules(question, calcGame);
};

export default gameLaunch;