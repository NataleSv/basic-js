const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  //количество повторений строки str
  let repeatTimes = options.repeatTimes || 1; 
  //разделение повторений строки str               
  let separator = options.separator || '+'; 
  //доп. строка при повторении строки str
  let addition = options.addition;  
  //количество добавлений повторений  
  let additionRepeatTimes = options.additionRepeatTimes || 1; 
  // разделение addition           
  let additionSeparator = options.additionSeparator || '|';  

  let newStrArr = [];
  let result;

  for (let i = 0; i < repeatTimes; i++) {
    let part = str;
    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (additionRepeatTimes > j+1) {
          part += (addition + additionSeparator);
        } else if (additionRepeatTimes == j+1) {
          part += addition;
        }
      }
    }
    newStrArr.push(part);
  }
  result = newStrArr.join(separator);

  return result;
}

module.exports = {
  repeater
};
