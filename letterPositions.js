const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (i === " ") {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

/*
console.log(letterPositions("hello"));

// try removing continue later

assertArraysEqual(letterPositions("hello").e, [1]);
*/