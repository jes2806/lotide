const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function([array1], [array2]) {
  if (array1 === array2) {
    return true;
  }
  if (array1 !== array2) {
    return false;
  }
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
