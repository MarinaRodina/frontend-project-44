import engine from '../index.js';
import { getRandomNumberUpToHundred } from '../helperFunctions.js';

const checkNumberIsEven = () => {
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskEven = () => {
    const number = getRandomNumberUpToHundred();
    const isEven = (num) => num % 2 === 0;
    const question = `${number}`;
    const result = (isEven(number) ? 'yes' : 'no');
    return [question, result];
  };
  engine(noteToEven, taskEven);
};
export default checkNumberIsEven;
