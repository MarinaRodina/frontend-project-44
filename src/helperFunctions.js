const getRandomNumber = (maxNumber, minNumber = 0) => {
  const count = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return count;
};

export default getRandomNumber;
