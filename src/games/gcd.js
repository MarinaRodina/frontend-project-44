import engine from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getGreatestCommonDivisor = () => {
  const noteDivisor = 'Find the greatest common divisor of given numbers.';
  const taskDivisor = () => {
    const number1 = getRandomNumber(50);
    const number2 = getRandomNumber(50);
    const divisors = [];
    const getDivisor = () => {
      let divisor = 1;
      const minNumber = Math.min(number1, number2);
      while (divisor <= minNumber) {
        if ((number1 % divisor === 0) && (number2 % divisor === 0)) {
          divisors.push(divisor);
        }
        divisor += 1;
      }
      return divisors;
    };
    const generalDividor = getDivisor();
    const lastElement = generalDividor.pop();
    const result = lastElement.toString();
    const question = `${number1} ${number2}`;
    return [question, result];
  };
  engine(noteDivisor, taskDivisor);
};

export default getGreatestCommonDivisor;
