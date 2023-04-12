const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domainArr = email.split('@');
  let domain = domainArr[domainArr.length-1];

  return domain;
  throw new NotImplementedError('Not implemented');
  
}

module.exports = {
  getEmailDomain
};
