import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorslength = operators.length;
  const randomIndex = (getRandomNumber(operatorslength));
  const getOperator = operators[randomIndex];
  return getOperator;
};

const calculate = (randomNumber1, randomNumber2, randomOperator) => {
  let count;
  switch (randomOperator) {
    case '+':
      count = (randomNumber1 + randomNumber2);
      break;
    case '-':
      count = (randomNumber1 - randomNumber2);
      break;
    default:
      count = (randomNumber1 * randomNumber2);
  }
  return count;
};

const noteBrainCalc = 'What is the result of the expression?';

const startGameBrainCalc = () => {
  const decideBrainCalc = () => {
    const number1 = getRandomNumber(20);
    const number2 = getRandomNumber(20);
    const operator = getRamdomOperator();
    const result = calculate(number1, number2, operator).toString();
    const question = `${number1} ${operator} ${number2}`;
    return [question, result];
  };
  startGame(noteBrainCalc, decideBrainCalc);
};

export default startGameBrainCalc;
