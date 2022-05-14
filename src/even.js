import readlineSync from 'readline-sync';

const randomNuwber = () => Math.floor(Math.random() * 1000);

const evenNumber = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfAttempts = 3;
  while (countOfAttempts > 0) {
    const whichNuwber = randomNuwber();
    const correctAnswer = (whichNuwber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${whichNuwber}`);
    const sayAnswer = readlineSync.question('Your answer: ');
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

export default evenNumber;
