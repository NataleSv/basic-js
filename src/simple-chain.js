const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  maker: [],
  getLength() {
    return this.maker.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.maker.push(`( ${value} )`);
    } else {
      this.maker.push(`( )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position  != 'number' ||
       (position % 1) != 0 ||
       !this.maker[position-1]) {
         this.maker.length = 0;
         throw new Error(`You can't remove incorrect link!`);
    } else {
      this.maker.splice((position - 1), 1);
      return chainMaker;
    }
  },
  reverseChain() {
    this.maker.reverse()
    return chainMaker;
  },
  finishChain() {
    let resultMaker = this.maker.join(`~~`);
    this.maker.length = 0;
    return resultMaker;
  }
};

module.exports = {
  chainMaker
};
