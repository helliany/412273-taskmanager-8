export const getRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};
