import engine from '../index.js';

const calculator = () => {
  const noteToCalc = 'What is the result of the expression?';
  const taskCalc = () => {
    const maxNumberToCheck = 20;
    const getRandomNumber = () => (Math.floor(Math.random() * maxNumberToCheck));
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const getRamdomOperator = () => {
      const operators = ['+', '-', '*'];
      const randomIndex = Math.floor(Math.random() * operators.length);
      const getOperator = operators[randomIndex];
      return getOperator;
    };
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
