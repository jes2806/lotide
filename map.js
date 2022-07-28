// map function will take in 2 arguments An array to map and a callback function
const words = ["pineapple", "anime", "water", "princess", "puppies"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['p', 'a', 'w', 'p', 'p']);
const numbers = [1, 2, 3];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2, [2, 4, 6]);
const emojis = ['😀', '❤️'];
const results3 = map(emojis, emoji => emoji + "😍");
assertArraysEqual(results3, ['😀😍', '❤️😍']);
const simple = [true, false];
const results4 = map(simple, simps => simps + "true");
assertArraysEqual(results4, [(true + "true"), (false + "true")]);