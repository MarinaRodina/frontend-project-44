const getRandomNumberUpToHundred = () => {
  const maxNumberToCheck = 100;
  const getNumber = (Math.floor(Math.random() * maxNumberToCheck));
  return getNumber;
};

const getRandomNumberUpToTwenty = () => {
  const maxNumberToCheck = 20;
  const getNumber = (Math.floor(Math.random() * maxNumberToCheck));
  return getNumber;
};

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const getOperator = operators[randomIndex];
  return getOperator;
};

export { getRandomNumberUpToHundred, getRandomNumberUpToTwenty, getRamdomOperator };
