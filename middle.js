const middle = function(array) {
  let newArray = [];
  let index = Math.floor(array.length / 2);
  let index2 = index - 1;
  if (array.length <= 2) {
    console.log(newArray);
    return (newArray);
  }
  if (array.length % 2 === 0) {
    newArray.push(array[index2]);
    newArray.push(array[index]);
  } else {
    newArray.push(array[index]);
  }
  console.log(newArray);
  return (newArray);
};

module.exports = middle;