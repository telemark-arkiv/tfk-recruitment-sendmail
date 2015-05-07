'use strict';

var assert = require('assert');
var recruitmentsSendMail = require('../index');

describe('recruitmentsSendMail', function() {

  it('it requires an options object', function(done) {

    var options = false;

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.apiKey to exist', function(done) {

    var options = {
      apiKey: false
    };

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.apiKey/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.apiUrl to exist', function(done) {

    var options = {
      apiKey: true,
      apiUrl: false
    };

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.apiUrl/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.apiUrl to a valid url', function(done) {

    var options = {
      apiKey: true,
      apiUrl: 'pysjevev'
    };

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /options.apiUrl is an invalid url/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.mailTo to exist', function(done) {

    var options = {
      apiKey: true,
      apiUrl: 'http://www.telemark.no',
      mailTo: false
    };

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.mailTo/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.mailFrom to exist', function(done) {

    var options = {
      apiKey: true,
      apiUrl: 'http://www.telemark.no',
      mailTo: true,
      mailFrom: false
    };

    recruitmentsSendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.mailFrom/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

});