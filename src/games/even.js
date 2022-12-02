import engine from '../index.js';

const checkNumberIsEven = () => {
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskEven = () => {
    const maxNumberToCheck = 100;
    const getRandomNumber = () => (Math.round(Math.random() * maxNumberToCheck));
    const number = getRandomNumber();
    const isEven = (num) => num % 2 === 0;
    const question = `${number}`;
    const result = (isEven(number) ? 'yes' : 'no');
    return [question, result];
  };
  engine(noteToEven, taskEven);
};
export default checkNumberIsEven;
