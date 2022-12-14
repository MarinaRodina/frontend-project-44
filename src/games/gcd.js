import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getGreaterСommonDivisor = (num1, num2) => {
  const divisors = [];
  let divisor = 1;
  const minNumber = Math.min(num1, num2);
  while (divisor <= minNumber) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) {
      divisors.push(divisor);
    }
    divisor += 1;
  }
  return divisors.pop();
};

const noteBrainGcd = 'Find the greatest common divisor of given numbers.';

const startGameBrainGcd = () => {
  const decideBrainGcd = () => {
    const number1 = getRandomNumber(50, 1);
    const number2 = getRandomNumber(50, 1);
    const result = getGreaterСommonDivisor(number1, number2).toString();
    const question = `${number1} ${number2}`;
    return [question, result];
  };
  startGame(noteBrainGcd, decideBrainGcd);
};

export default startGameBrainGcd;
