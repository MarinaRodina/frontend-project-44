import startGame from '../index.js';
import getRandomNumber from '../helperFunctions.js';

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorslength = operators.length;
  const randomIndex = (getRandomNumber(operatorslength));
  const getOperator = operators[randomIndex];
  return getOperator;
};

const startGameBrainCalc = () => {
  const noteBrainCalc = 'What is the result of the expression?';
  const decideBrainCalc = () => {
    const number1 = getRandomNumber(20);
    const number2 = getRandomNumber(20);
    const operator = getRamdomOperator();
    let result;
    switch (operator) {
      case '+':
        result = (number1 + number2);
        break;
      case '-':
        result = (number1 - number2);
        break;
      case '*':
        result = (number1 * number2);
        break;
      default:
        result = null;
    }
    result = result.toString();
    const question = `${number1} ${operator} ${number2}`;
    return [question, result];
  };
  startGame(noteBrainCalc, decideBrainCalc);
};

export default startGameBrainCalc;
