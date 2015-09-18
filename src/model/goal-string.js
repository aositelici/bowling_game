'use strict';

var _ = require('lodash');
var Frame = require('./model/frame');

function GoalString() {
  this.stringArray = [];
}

GoalString.prototype.getStringArray = function (string) {
  var stringArray = string.split('|');
  var _this = this;
  stringArray.map(function (s) {
    if (s !== '') {
      _this.stringArray.push(s);
    }
  });
};

GoalString.prototype.calculateScore = function () {

  var FRAMECOUNTS = 10;
  var frame = new Frame();
  var score = 0;
  for (var i = 0; i < FRAMECOUNTS; i++) {
      var array = this.stringArray.slice(i);
      score += frame.getScore(array);
  }
  return score;

};

module.exports = GoalString;