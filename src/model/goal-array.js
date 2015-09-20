'use strict';

function GoalArray(string) {
  this.string = string;
  this.stringArray = [];
}

GoalArray.prototype.getStringArray = function () {
  var stringArray = this.string.split('|');
  var _this = this;
  stringArray.map(function (s) {
    if (s !== '') {
      _this.stringArray.push(s);
    }
  });
  return this.stringArray;
};

module.exports = GoalArray;