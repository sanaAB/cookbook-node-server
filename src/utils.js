const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const getElementByCategory = (category, elementList) => {
  return elementList.filter((element) => {
    return element.category === category;
  });
};

module.exports = {
  getElementById: getElementById,
  getElementByCategory: getElementByCategory,
};
