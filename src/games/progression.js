import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getNumberArray = (num1, step1) => {
  const numberArray = [];
  let num = num1;
  let count = 1;
  while (count <= 10) {
    numberArray.push(num);
    num += step1;
    count += 1;
  }
  return numberArray;
};

const startGameBrainProgression = () => {
  const noteBrainProgression = 'What number is missing in the progression?';
  const decideBrainProgression = () => {
    const number = getRandomNumber(50);
    const step = getRandomNumber(5);
    const array = getNumberArray(number, step);
    const randomIndex = getRandomNumber(8);
    const hiddenNumber = array[randomIndex];
    array[randomIndex] = '..';
    const progression = array.join(' ');
    const result = hiddenNumber.toString();
    const question = `${progression}`;
    return [question, result];
  };
  startGame(noteBrainProgression, decideBrainProgression);
};

export default startGameBrainProgression;
