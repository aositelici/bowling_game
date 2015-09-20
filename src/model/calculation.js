'use strict';

var GoalArray = require('./goal-array');
var Frame = require('./frame');

function Calculation() {
  this.frameCount = 10;
}

Calculation.prototype.calculateScore = function (string) {
  var goalArray = new GoalArray(string);
  var stringArray = goalArray.getStringArray();

  var frame = new Frame();
  var score = 0;
  for (var i = 0; i < this.frameCount; i++) {
    var array = stringArray.slice(i);
    score += frame.getScore(array);
  }
  return score;
};

module.exports = Calculation;