import engine from '../index.js';
import { getRandomNumber } from '../helperFunctions.js';

const getMissingNumber = () => {
  const noteProgression = 'What number is missing in the progression?.';
  const taskProgression = () => {
    const number = getRandomNumber(50);
    const getNumberArray = () => {
      let numberArray = [];
      let num = number;
      let count = 1;
      const step = getRandomNumber(5);
      while (count <= 10) {
        numberArray.push(num);
        num += step;
        count += 1;
      }
      return numberArray;
    };
    const array = getNumberArray(); // получаем массив цифр//
    const randomIndex = getRandomNumber(8);
    const hiddenNumber = array[randomIndex];
    const result = hiddenNumber.toString(); // получаем верный ответ //

    const firstPartArrya = array.slice(0, randomIndex);
    const secondPartArrya = array.slice(randomIndex + 1);
    const firstPartNumbers = firstPartArrya.join(' ');
    const secondParNumbers = secondPartArrya.join(' ');
    const question = `${firstPartNumbers} .. ${secondParNumbers}`; // получаем вопрос //
    return [question, result];
  };
  engine(noteProgression, taskProgression);
};

export default getMissingNumber;
