var assert = require("assert");
var fs = require('fs');
var html5Video;
var result;

describe('html5-video', function() {
  describe('module exists:', function() {
    html5Video = require('../index.js');
    assert(html5Video);
    it('should exist', function() {
      assert(html5Video);
    });
  });
  describe('converts from MP4:', function() {
    it('should invoke its callback', function(done) {
      return html5Video('test-case.mp4', function(_err, _result) {
        err = _err;
        result = _result;
        return done();
      });
    });
    it('should not generate an error on valid data', function() {
      assert(!err);
    });
    it('should deliver a result object', function() {
      assert(result);
    });
    it('should deliver a result object with an mp4 property', function() {
      assert(result.mp4);
    });
    it('mp4 should not be empty', function() {
      var stat = fs.statSync(result.mp4);
      assert(stat.size);
    });
    it('should deliver a result object with an webm property (google VP8)', function() {
      assert(result.webm);
    });
    it('webm should not be empty', function() {
      var stat = fs.statSync(result.webm);
      assert(stat.size);
    });
    it('should deliver a result object with a jpg property', function() {
      assert(result.jpg);
    });
    it('jpg should not be empty', function() {
      var stat = fs.statSync(result.jpg);
      assert(stat.size);
    });
  });
  describe('converts from webm:', function() {
    it('should invoke its callback', function(done) {
      return html5Video('test-case.webm', function(_err, _result) {
        err = _err;
        result = _result;
        return done();
      });
    });
    it('should not generate an error on valid data', function() {
      assert(!err);
    });
    it('should deliver a result object', function() {
      assert(result);
    });
    it('should deliver a result object with an mp4 property', function() {
      assert(result.mp4);
    });
    it('mp4 should not be empty', function() {
      var stat = fs.statSync(result.mp4);
      assert(stat.size);
    });
    it('should deliver a result object with an webm property (google VP8)', function() {
      assert(result.webm);
    });
    it('webm should not be empty', function() {
      var stat = fs.statSync(result.webm);
      assert(stat.size);
    });
    it('should deliver a result object with a jpg property', function() {
      assert(result.jpg);
    });
    it('jpg should not be empty', function() {
      var stat = fs.statSync(result.jpg);
      assert(stat.size);
    });
  });
});

