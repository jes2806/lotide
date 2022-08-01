const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
/* const data1 = {
  "Testing": { info: 1 },
  "Still Testing": { info: 3 },
  "All the Testing": { info: 2 }
};

const results1 = findKey(data1, x => x.info === 2);
assertEqual(results1, "All the Testing");

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"
*/