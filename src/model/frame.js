'use strict';

function Frame() {
}

Frame.prototype.judgeType = function (string) {
  if (string === 'X') {
    this.determineStrike();
  }
  else if (string.indexOf('/') !== -1) {
    this.determineSpare(string);
  }
  else {
    this.determineCommon(string);
  }
};

Frame.prototype.determineStrike = function() {
  this.score = 10;
  this.count = 1;
  this.nextCount = 2;
  this.type = 'STRIKE';
};

Frame.prototype.determineSpare = function(string) {
  var allScore = [];
  var scoreArray = string.split('');

  scoreArray.forEach(function (score) {
    allScore.push(isNaN(Number(score)) ? 10 - allScore[0] : Number(score));
  });
  this.score = allScore;
  this.count = 2;
  this.nextCount = 1;
  this.type = 'SPARE';
};

Frame.prototype.determineCommon = function(string) {
  var allScore = [];
  var scoreArray = string.split('');

  scoreArray.forEach(function (score) {
    allScore.push(isNaN(Number(score)) ? 0 : Number(score));
  });
  this.score = allScore;
  this.count = 2;
  this.nextCount = 0;
  this.type = 'COMMON';
};

Frame.prototype.getScore = function (stringArray) {
  this.judgeType(stringArray[0]);
  var score = 0;

  if (this.type === 'STRIKE') {
    score += this.score;
  }
  else {
    score += this.score.reduce(function (a, b) {
      return a + b;
    })
  }
  var nextStringArray = stringArray.slice(1);
  score += this.getNextScore(nextStringArray);
  return score;
};

Frame.prototype.getNextScore = function (array) {
  var i = 0;
  var score = 0;
  while (i < this.nextCount) {
    var frame = new Frame();
    frame.judgeType(array[i]);

    if (frame.type === 'STRIKE') {
      score += frame.score;
      i += frame.count;
    }
    else {
      for (var k = 0; k < frame.score.length && i < this.nextCount; k++, i++) {
        score += frame.score[k];
      }
    }
  }
  return score;
};

module.exports = Frame;