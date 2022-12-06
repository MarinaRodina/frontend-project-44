import readlineSync from 'readline-sync';

const engine = (rulesOfTheGame, taskForTheRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const taskData = taskForTheRound();
    console.log(`Question: ${taskData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = taskData[1];
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
