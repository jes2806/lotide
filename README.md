# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jes2806/lotide`

**Require it:**

`const _ = require('@jes2806/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first index of an array
* `tail(ourArray)`: returns last index of an array
* `middle(array)`: returns middle index of an array (it returns 2 values if the array length is even)
* `countLetters(sentence)`: count how many of each letter there is in an array
* `countOnly(allItems, itemsToCount)`: counts how many items are in itemsToCount argument
* `eqArrays(array1, array2)`: compares if two arrays are equal
* `eqObjects(object1, object2)`: compares if two objects are equal
* `findKey(object, callback)`: retrieves key
* `findKeyByValue(object, value)`: retrieves key based on value search
* `letterPosition(sentence)`: return the indices in the string where each character is found
* `map(array, callback)`: return a new array based on the results of the callback function
* `takeUntil(array, callback)`: returns new array stopping when value matches the value inputted in callback
* `without(source, itemsToRemove)`: returns a new array that removes itemsToRemove from starting array