const getRandomNumber = () => {
  const maxNumberToCheck = 25;
  // + 1, чтобы не было передано в функцию 0 //
  const getNumber = (Math.floor(Math.random() * maxNumberToCheck) + 1);
  return getNumber;
};

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const getOperator = operators[randomIndex];
  return getOperator;
};

export { getRandomNumber, getRamdomOperator };
