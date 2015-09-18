'use strict';

var GoalString = require('./goal-string');
var Frame = require('./frame');

function Calculation() {
  this.frameCount = 10;
}

Calculation.prototype.calculateScore = function (string) {
  var goalString = new GoalString(string);
  var stringArray = goalString.getStringArray();

  var frame = new Frame();
  var score = 0;
  for (var i = 0; i < this.frameCount; i++) {
    var array = stringArray.slice(i);
    score += frame.getScore(array);
  }
  return score;
};

module.exports = Calculation;