const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const keys of obj1) {
    if (object1[keys] !== object2[keys]) {
      if (Array.isArray(object1[keys])) {
        if (!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

/* const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false
*/
