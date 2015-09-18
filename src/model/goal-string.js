'use strict';

function GoalString(string) {
  this.string = string;
  this.stringArray = [];
}

GoalString.prototype.getStringArray = function () {
  var stringArray = this.string.split('|');
  var _this = this;
  stringArray.map(function (s) {
    if (s !== '') {
      _this.stringArray.push(s);
    }
  });
  return this.stringArray;
};

module.exports = GoalString;