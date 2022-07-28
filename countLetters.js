const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
  for (const letters of sentence) {
    if (letters === " ") {
      continue;
    }
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;
};
console.log(countLetters("lighthouse in the house"));
/* should return: {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} */