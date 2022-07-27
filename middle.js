const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// implement middle which will take in an array and return the middle-most elements
// middle function should return only the middle section so lengths of returned array could vary
// 1 or 2 element arrays => return empty array
// odd number of elements return 1 element
// even number of elements return 2 elements

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
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]);
assertArraysEqual(middle([1, 2 ,3]), [2]);