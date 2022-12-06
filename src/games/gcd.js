import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getDivisor = (num1, num2) => {
  const divisors = [];
  let divisor = 1;
  const minNumber = Math.min(num1, num2);
  while (divisor <= minNumber) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) {
      divisors.push(divisor);
    }
    divisor += 1;
  }
  return divisors;
};

const startGameBrainGcd = () => {
  const noteBrainGcd = 'Find the greatest common divisor of given numbers.';
  const decideBrainGcd = () => {
    const number1 = getRandomNumber(50);
    const number2 = getRandomNumber(50);
    const generalDividor = getDivisor(number1, number2);
    const lastElement = generalDividor.pop();
    const result = lastElement.toString();
    const question = `${number1} ${number2}`;
    return [question, result];
  };
  startGame(noteBrainGcd, decideBrainGcd);
};

export default startGameBrainGcd;
