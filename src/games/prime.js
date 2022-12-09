import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const noteBrinePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGameBrainPrime = () => {
  const decideBrainPrime = () => {
    const number = getRandomNumber(50);
    const question = number.toString();
    const result = (isPrime(number) ? 'yes' : 'no');
    return [question, result];
  };
  startGame(noteBrinePrime, decideBrainPrime);
};
export default startGameBrainPrime;
