const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([0, 1, 2], [1, 2, 3]);