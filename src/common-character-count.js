const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let arr1 = [...s1];
  let arr2 = [...s2];

  const countItems1 = {}; 
    for (const item of arr1) {
      countItems1[item] = countItems1[item] ? countItems1[item] + 1 : 1;
    }

    const countItems2 = {}; 
    for (const item of arr2) {
      countItems2[item] = countItems2[item] ? countItems2[item] + 1 : 1;
    }

  let keys1 = Object.keys(countItems1);
  let keys2 = Object.keys(countItems2);
  let count = 0;
  for(let i = 0; i < keys1.length; i++) {
    if(keys2.includes(keys1[i])) {
     count+=Math.min(countItems1[keys1[i]], countItems2[keys1[i]])
    }
  }

  return count;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
