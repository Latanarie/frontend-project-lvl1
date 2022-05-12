import readlineSync from 'readline-sync';

const meeting = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

export default meeting;
