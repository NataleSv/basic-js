const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    
    if (!message ||
        typeof message !== 'string' ||
        !key || 
        typeof key !== 'string') {
          throw new Error ("Incorrect arguments!");
        }
        
    let m = message.toUpperCase().split(' ').join(''); 
    let k = key.toUpperCase(); 
    let res = ''; 
    let result = '';

    while(m.length > k.length) k+=k
    
    for (let i = 0; i < m.length; i++) {
      let newAlp = [...this.alphabet].slice('');
      let codeAlp = newAlp.concat( newAlp.splice(0, newAlp.indexOf(k[i])) ).join('');

      if (this.alphabet.includes(m[i])) {
        res += codeAlp[this.alphabet.indexOf(m[i])];
      } else {
        res += m[i];
      }
    }
    
    let revM = res.split('').reverse();

    for (let i = 0; i < message.length; i++) {
      if (message[i] != ' ') {
        result += revM.pop();
      } else {
        result += ' ';
      }
    }

    if (this.type) {
      return result;
    } else {
      result = result.split('').reverse().join('');
      return result;
    }
   
  }
  
  decrypt(message, key) {
    if (!message ||
        typeof message !== 'string' ||
        !key || 
        typeof key !== 'string') {
          throw new Error ("Incorrect arguments!");
    }
        
    let m = message.toUpperCase().split(' ').join('');
    let k = key.toUpperCase();  
    let res = '';  
    let result = '';

    while(m.length > k.length) k+=k

    for (let i = 0; i < m.length; i++) {
      let newAlp = [...this.alphabet].slice('');
      let codeAlp = newAlp.concat(newAlp.splice(0, newAlp.indexOf(k[i]))).join('');

      if (this.alphabet.includes(m[i])) {
        res += this.alphabet[codeAlp.indexOf(m[i])];
      } else {
        res += m[i];
      }
    }
    
    let revM = res.split('').reverse();

    for (let i = 0; i < message.length; i++) {
      if (message[i] != ' ') {
        result += revM.pop();
      } else {
        result += ' ';
      }
    }
    
    if (this.type) {
      return result;
    } else {
      result = result.split('').reverse().join('');
      return result;
    }
  }
  }


module.exports = {
  VigenereCipheringMachine
};
