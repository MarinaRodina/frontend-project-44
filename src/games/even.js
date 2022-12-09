import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const isEven = (num) => num % 2 === 0;

const noteBrainEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameBrainEven = () => {
  const decideBrainEven = () => {
    const number = getRandomNumber(100);
    const result = (isEven(number) ? 'yes' : 'no');
    const question = `${number}`;
    return [question, result];
  };
  startGame(noteBrainEven, decideBrainEven);
};

export default startGameBrainEven;
