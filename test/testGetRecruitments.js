'use strict';

var assert = require('assert');
var getRecruitments = require('../lib/getRecruitments');

describe('getRecruitments', function() {

  it('it requires an url', function(done) {

    var url = false;

    getRecruitments(url, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: url/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires url to be valid', function(done) {

    var url = 'pysjevev';

    getRecruitments(url, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Invalid url/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it returns an array if succesful', function(done) {

    var url = 'https://api.t-fk.no/recruitments';

    getRecruitments(url, function(err, data) {
      if (err) {
        throw err;
      } else {
        assert(Array.isArray(data));
      }
      done();
    });
  });

});