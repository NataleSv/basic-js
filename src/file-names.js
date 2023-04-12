const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  function includeElem (element) {
    let indices = [];
    let idx = names.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = names.indexOf(element, idx + 1);
    }
    return indices;
  }
  
  function replaceDoubleElem(element) {
    
    let arr = includeElem(element);
    for (let i = 1; i < arr.length; i++) {
        names.splice(arr[i], 1, names[arr[i]]+`(${i})`);
      }
    }
  
  for (let j = 0; j < names.length; j++) {
    replaceDoubleElem(names[j]);
  }
  
   return names;

  throw new NotImplementedError('Not implemented');
  
}

module.exports = {
  renameFiles
};
