import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const isEven = (num) => num % 2 === 0;

const startGameBrainEven = () => {
  const noteBrainEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const decideBrainEven = () => {
    const number = getRandomNumber(100);
    const result = (isEven(number) ? 'yes' : 'no');
    return [`${number}`, result];
  };
  startGame(noteBrainEven, decideBrainEven);
};
export default startGameBrainEven;
