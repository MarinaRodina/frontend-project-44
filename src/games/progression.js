import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const startGameBrainProgression = () => {
  const noteBrainProgression = 'What number is missing in the progression?';
  const decideBrainProgression = () => {
    const number = getRandomNumber(50);
    const step = getRandomNumber(5);
    const getNumberArray = () => {
      const numberArray = [];
      let num = number;
      let count = 1;
      while (count <= 10) {
        numberArray.push(num);
        num += step;
        count += 1;
      }
      return numberArray;
    };
    const array = getNumberArray();
    const randomIndex = getRandomNumber(8);
    const hiddenNumber = array[randomIndex];
    const firstPartArrya = array.slice(0, randomIndex);
    const secondPartArrya = array.slice(randomIndex + 1);
    const firstPartNumbers = firstPartArrya.join(' ');
    const secondParNumbers = secondPartArrya.join(' ');
    return [`${firstPartNumbers} .. ${secondParNumbers}`, hiddenNumber.toString()];
  };
  startGame(noteBrainProgression, decideBrainProgression);
};

export default startGameBrainProgression;
