const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if(!date) {
    return 'Unable to determine the time of year!';
  }

  let newDate = new Date(date);
  if(typeof date == 'string' ||
    Object.prototype.toString.call(date) != '[object Date]' ||
    Object.getOwnPropertySymbols(date).length !== 0) {
       throw new Error ('Invalid date!');
  }

  const seasons = ['spring', 'summer', 'autumn (fall)', 'winter'];

  let numbMonth = date.getMonth();

  if(numbMonth == 11 || numbMonth <=1 ){
    return seasons[3];

  } else if (numbMonth > 1 && numbMonth < 5) {
    return seasons[0];

  } else if (numbMonth >=5 && numbMonth < 8) {
    return seasons[1];

  } else if (numbMonth >=8 && numbMonth < 11) {
    return seasons[2];
  } 


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
