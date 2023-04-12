const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let arr = str.split('');
  let arr2 = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      count++;
    } else {
      if(count>1){
        arr2.push(count);
      }
      arr2.push(arr[i]);
      count = 1;
    }
  }

  arr2 = arr2.join('')
  return arr2;

  throw new NotImplementedError('Not implemented');

}

module.exports = {
  encodeLine
};
