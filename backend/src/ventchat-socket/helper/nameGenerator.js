function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.getRandomName = () => {
  let names = [
    "Summer",
    "moon",
    "eternal sunshine",
    "cute Ocean",
    "pinkseason",
  ];
  return names[getRandomInt(0, names.length - 1)];
};
