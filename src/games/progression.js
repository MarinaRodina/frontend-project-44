import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getNumbers = (num1, step1, length) => {
  const numbers = [];
  let num = num1;
  let count = 1;
  while (count <= length) {
    numbers.push(num);
    num += step1;
    count += 1;
  }
  return numbers;
};

const noteBrainProgression = 'What number is missing in the progression?';

const progressionLength = 10;

const startGameBrainProgression = () => {
  const decideBrainProgression = () => {
    const number = getRandomNumber(50);
    const step = getRandomNumber(5, 1);
    const array = getNumbers(number, step, progressionLength);
    const randomIndex = getRandomNumber(9);
    const hiddenNumber = array[randomIndex];
    array[randomIndex] = '..';
    const progression = array.join(' ');
    const result = hiddenNumber.toString();
    const question = progression.toString();
    return [question, result];
  };
  startGame(noteBrainProgression, decideBrainProgression);
};

export default startGameBrainProgression;
