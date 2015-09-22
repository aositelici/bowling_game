'use strict';

function Frame(throwArray) {
  this.judgeType(throwArray);
}

Frame.prototype.judgeType = function (throwArray) {
  if (throwArray.length === 1) {
    this.beStrike(throwArray);
  } else if (throwArray[0] + throwArray[1] === 10) {
    this.beSpare(throwArray);
  } else {
    this.beCommon(throwArray);
  }
};

Frame.prototype.beStrike = function (throwArray) {
  this.throw = throwArray;
  this.throwCount = 1;
  this.nextThrowCount = 2;
  this.type = 'STRIKE';
};

Frame.prototype.beSpare = function (throwArray) {
  this.throw = throwArray;
  this.throwCount = 2;
  this.nextThrowCount = 1;
  this.type = 'SPARE';
};

Frame.prototype.beCommon = function (throwArray) {
  this.throw = throwArray;
  this.throwCount = 2;
  this.nextThrowCount = 0;
  this.type = 'COMMON';
};

Frame.prototype.getScore = function () {
  var score = this.throw.reduce(function (a, b) {
    return a + b;
  });
  return score;
};

module.exports = Frame;