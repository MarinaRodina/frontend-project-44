import engine from '../index.js';
import { getRandomNumber, getRamdomOperator } from '../helperFunctions.js';

const calculator = () => {
  const noteToCalc = 'What is the result of the expression?';
  const taskCalc = () => {
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
  engine(noteToCalc, taskCalc);
};

export default calculator;
