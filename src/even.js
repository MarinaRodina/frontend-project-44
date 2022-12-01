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
    const validation1 = ((number % 2 === 0) && (userAnswer === 'yes'));
    const validation2 = ((number % 2 !== 0) && (userAnswer === 'no'));
    if (validation1 === true || validation2 === true) {
      console.log('Correct!');
    } else {
      const correctAnswer = (userAnswer === 'yes' ? 'no' : 'yes');
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default checkNumberIsEven;
