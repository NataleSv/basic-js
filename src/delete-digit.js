const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let newNumbArr = String(n).split('');
  let lengthNumb = newNumbArr.length;
  let arr = [];
  arr = newNumbArr.fill(n);

  for(let i = 0; i < lengthNumb; i++) {
    arr[i] = String(arr[i]).split('');
    arr[i].splice(i, 1);
    arr[i] = +(arr[i].join(''));
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  arr.reverse();
  return arr[0];

  throw new NotImplementedError('Not implemented');

}

module.exports = {
  deleteDigit
};
