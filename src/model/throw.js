'use strict';

function Throw(string) {
  this.string = string;
  this.throwArray = [];
}

Throw.prototype.getThrowArray = function () {

  var array = this.getStringArray();

  var _this = this;
  array.map(function (a) {
    if (a === 'X') {
      _this.beStrikeThrow();

    } else if (a.indexOf('/') !== -1) {
      _this.beSpareThrow(a);

    } else {
      _this.beCommomThrow(a);
    }
  });
  return this.throwArray;
};

Throw.prototype.getStringArray = function () {

  var stringArray = this.string.split('|');
  var array = [];
  stringArray.map(function (s) {
    if (s !== '') {
      array.push(s);
    }
  });
  return array;
};

Throw.prototype.beStrikeThrow = function () {

  this.throwArray.push([10]);
};

Throw.prototype.beSpareThrow = function (string) {

  var subArray = [];
  var stringArray = string.split('');

  stringArray.forEach(function (string) {
    subArray.push(isNaN(Number(string)) ? 10 - subArray[0] : Number(string));
  });
  this.throwArray.push(subArray);
};

Throw.prototype.beCommomThrow = function (string) {

  var subArray = [];
  var stringArray = string.split('');

  stringArray.forEach(function (string) {
    subArray.push(isNaN(Number(string)) ? 0 : Number(string));
  });
  this.throwArray.push(subArray);
};
module.exports = Throw;