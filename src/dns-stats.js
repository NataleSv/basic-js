const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {

  let newRevArr =[];

  function addDomains(k) {
    let reverseDomain = [];
    reverseDomain = domains[k].split('.');

    for (let i = 0; i < reverseDomain.length; i++) {
      reverseDomain[i] = "."+reverseDomain[i];
    }

    let sum = "";
    for (let j = reverseDomain.length-1; j>=0; j--) {
      sum = sum+reverseDomain[j];
      newRevArr.push(sum);
    }
  }

  for(let i = 0; i< domains.length; i++) {
    addDomains(i);
  }

  const countItems = {}; 
    for (const item of newRevArr) {
      countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }

  return countItems;
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
