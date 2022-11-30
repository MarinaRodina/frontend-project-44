import readlineSync from 'readline-sync';

const checkNumberIsEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumberToCheck = 100;
  const getRandomNumber = () => (Math.round(Math.random() * maxNumberToCheck));
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
        return;
      }
    }
    if ((number % 2 !== 0)) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default checkNumberIsEven;
