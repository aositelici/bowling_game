'use strict';

var Frame = require('../src/model/frame');

describe('Frame:', function () {
  var frame = new Frame();
  describe('#judgeType(string)', function () {
    it('if the string is X ,the judged type should be strike', function () {
      frame.judgeType('X');
      expect(frame.score).toBe(10);
      expect(frame.count).toBe(1);
      expect(frame.nextCount).toBe(2);
      expect(frame.type).toBe('STRIKE');
    });

    it('if the string includes / ,the judged type should be spare', function () {
      frame.judgeType('7/');
      expect(frame.score).toEqual([7,3]);
      expect(frame.count).toBe(2);
      expect(frame.nextCount).toBe(1);
      expect(frame.type).toBe('SPARE');
    });

    it('if the string includes only  number or - ,the judged type should be common', function () {
      frame.judgeType('7-');
      expect(frame.score).toEqual([7,0]);
      expect(frame.count).toBe(2);
      expect(frame.nextCount).toBe(0);
      expect(frame.type).toBe('COMMON');
    });
  })

  describe('#getScore(stringArray)', function() {
    it('if the string starts with X and the next frame is not strike ,the score should be 10' +
        ' add the next two hits score', function () {
      expect(frame.getScore(['X','12'])).toEqual(13);
    });

    it('if the string starts with X and the next two frames are all strike ,the score should be 10 +10 ' +
        '+ 10', function () {
      expect(frame.getScore(['X','X','X'])).toEqual(30);
    });

    it('if the string starts with X and the next frame are strike and other frames ,the score should be 10 +10 ' +
        '+ the first hit score', function () {
      expect(frame.getScore(['X','X','25'])).toEqual(22);
    });

    it('if the string starts with a spare frame and the next frame is strike ,the score should be 10 +10 ', function () {
      expect(frame.getScore(['4/','X'])).toEqual(20);
    });

    it('if the string starts with a spare frame and the next frame is not a strike ,the score should be 10 add ' +
        'the next hit score ', function () {
      expect(frame.getScore(['4/','3/'])).toEqual(13);
    });

    it('if the string starts with a common frame ,the score should be the two hits in the frame ', function () {
      expect(frame.getScore(['45'])).toEqual(9);
    });

    it("if the length of stringArray more than the frame's count needs  when started with common frame,the score " +
        "should not change ", function () {
      expect(frame.getScore(['45','X'])).toEqual(frame.getScore(['45']));
    });

    it("if the length of stringArray more than the frame's count needs when started with spare,the score should not " +
        "change ", function () {
      expect(frame.getScore(['4/','X','79'])).toEqual(frame.getScore(['4/','X']));
    });

    it("if the length of stringArray more than the frame's count needs when started with strike,the score should not" +
        " change ", function () {
      expect(frame.getScore(['X','X','25'])).toEqual(frame.getScore(['X','X','25','7/']));
    });
  })
});