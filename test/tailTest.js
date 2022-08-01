const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[1], "Labs");
  });
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(words.length, 3);
  });
});