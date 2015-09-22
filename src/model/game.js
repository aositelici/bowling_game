'use strict';

var Throw = require('./throw');
var Frame = require('./frame');

function Game() {
  this.frameCount = 10;
}

Game.prototype.calculateScore = function (string) {
  var _throw = new Throw(string);
  var throwArray = _throw.getThrowArray();

  var score = 0;
  for (var i = 0; i < this.frameCount; i++) {
    var frame = new Frame(throwArray[i]);
    score += frame.getScore();
    score += this.getNextFramesScore(frame.nextThrowCount, i, throwArray);
  }
  return score;
};

Game.prototype.getNextFramesScore = function(nextThrowCount, index, throwArray) {
  var i = 0;
  var nextScore = 0;

  while (i < nextThrowCount) {
    var nextFrame = new Frame(throwArray[index + i + 1]);

    if (nextFrame.type === 'STRIKE') {
      nextScore += nextFrame.getScore();
      i += nextFrame.throwCount;
    } else {
      for (var k = 0; k < nextFrame.throw.length && i < nextThrowCount; k++, i++) {
        nextScore += nextFrame.throw[k];
      }
    }
  }
  return nextScore;
};

module.exports = Game;