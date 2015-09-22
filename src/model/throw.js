'use strict';

function Throw(string) {
  this.string = string;
  this.throwArray = [];
}

Throw.prototype.getThrowArray = function () {
  var array = this.getStringArray();

  var _this = this;
  array.map(function(a) {
    if(a === 'X'){
      _this.throwArray.push([10]);
    }else if(a.indexOf('/') !== -1) {
      var subArray = [];
      var stringArray = a.split('');

      stringArray.forEach(function (string) {
        subArray.push(isNaN(Number(string)) ? 10 - subArray[0] : Number(string));
      });
      _this.throwArray.push(subArray);
    }else{
      var subArray = [];
      var stringArray = a.split('');

      stringArray.forEach(function (string) {
        subArray.push(isNaN(Number(string)) ? 0 : Number(string));
      });
      _this.throwArray.push(subArray);
    }
  });
  return this.throwArray;
};

Throw.prototype.getStringArray = function() {
  var stringArray = this.string.split('|');
  var array = [];
  stringArray.map(function (s) {
    if (s !== '') {
      array.push(s);
    }
  });
  return array;
};
module.exports = Throw;