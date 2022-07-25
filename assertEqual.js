const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("❌❌❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Yes", "Ya");
assertEqual(1, 1);
assertEqual(1, -1);
