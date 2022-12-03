const getRandomNumber = () => {
  const maxNumberToCheck = 25;
  const getNumber = (Math.floor(Math.random() * maxNumberToCheck));
  return getNumber;
};

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const getOperator = operators[randomIndex];
  return getOperator;
};

export { getRandomNumber, getRamdomOperator };
