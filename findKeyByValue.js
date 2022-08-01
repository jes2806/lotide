const findKeyByValue = function(object, value) {
  for (const keys of Object.keys(object)) {
    const val = object[keys];
    if (value === val) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;

/* 
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
*/