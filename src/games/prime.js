import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const isPrime = (num) => {
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0 || num < 2) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const startGameBrainPrime = () => {
  const noteBrinePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const decideBrainPrime = () => {
    const number = getRandomNumber(50);
    const question = `${number}`;
    const result = (isPrime(number) ? 'yes' : 'no');
    return [question, result];
  };
  startGame(noteBrinePrime, decideBrainPrime);
};
export default startGameBrainPrime;
