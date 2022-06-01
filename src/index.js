import readlineSync from 'readline-sync';

const generalRules = (whatToDo, howToCalculate) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(whatToDo);
  let countOfAttempts = 3;
  while (countOfAttempts > 0) {
    const [question, correctResult] = howToCalculate();
    console.log(`Question: ${question}`);
    const sayAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = correctResult;
    if (sayAnswer === correctAnswer) {
      console.log('Correct!');
      countOfAttempts -= 1;
    } else {
      console.log(`'${sayAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalRules;
