import engine from '../index.js';
import { getRandomNumber } from '../helperFunctions.js';

const checkNumberIsPrime = () => {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    const number = getRandomNumber(50);
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
    const question = `${number}`;
    const result = (isPrime(number) ? 'yes' : 'no');
    return [question, result];
  };
  engine(noteToPrime, taskPrime);
};
export default checkNumberIsPrime;
