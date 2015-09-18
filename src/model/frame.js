'use strict';

function Frame() {
}

Frame.prototype.judgeType = function(string) {
  if(string === 'X') {
    this.score = 10;
    this.count = 1;
    this.nextCount = 2;
  }
  else if(string.indexOf('/')!== -1) {
    var allScore = [];
    var scoreArray = string.split('');
    allScore.push(Number(scoreArray[0]));
    allScore.push(10 - Number(scoreArray[0]));
    this.score =allScore;
    this.count = 2;
    this.nextCount = 1;
  }
  else {
    var allScore = [];
    var scoreArray = string.split('');
    scoreArray.forEach(function (score) {
      allScore.push(isNaN(Number(score)) ? 0 : Number(score));
    });
    this.score =allScore;
    this.count = 2;
    this.nextCount = 0;
  }
};

Frame.prototype.getScore = function(stringArray) {
  this.judgeType(stringArray[0]);
  var score = 0;

  if(this.score instanceof Array) {
    score += this.score.reduce(function(a,b) {
      return a + b;
    })
  }
  else {
    score += this.score;
  }
  var i = 0;
  while( i < this.nextCount) {
    var frame = new Frame();
    frame.judgeType(stringArray[i+1]);
    if(frame.score instanceof Array) {
      for(var k = 0; k < frame.score.length && i < this.nextCount; k++,i++) {
        score += frame.score[k];
      }
    }
    else {
      score += frame.score;
      i += frame.count;
    }
  }
  return score;
};

module.exports = Frame;