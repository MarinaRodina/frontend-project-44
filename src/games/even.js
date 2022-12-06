import engine from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const isEven = (num) => num % 2 === 0;

const checkNumberIsEven = () => {
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskEven = () => {
    const number = getRandomNumber(100);
    const result = (isEven(number) ? 'yes' : 'no');
    return [`${number}`, result];
  };
  engine(noteToEven, taskEven);
};
export default checkNumberIsEven;
