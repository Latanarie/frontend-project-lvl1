import readlineSync from 'readline-sync';

const generateRules = (getQuestion, getResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(getQuestion);

  for (let i = 3; i > 0; i -= 1) {
    const [question, correctResult] = getResult();
    console.log(`Question: ${question}`);
    const sayAnswer = readlineSync.question('Your answer: ');
    if (sayAnswer !== correctResult) {
      console.log(`'${sayAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generateRules;
