// добавим + 1, чтобы в числа не попал 0 //
const getRandomNumber = (maxNumber) => (Math.floor(Math.random() * maxNumber) + 1);

const getRamdomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const getOperator = operators[randomIndex];
  return getOperator;
};

export { getRandomNumber, getRamdomOperator };
