'use strict';

var assert = require('assert');
var sendMail = require('../lib/sendMail');

describe('sendMail', function() {

  it('it requires an options object', function(done) {

    var options = false;

    sendMail(options, function(err, data) {
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

    sendMail(options, function(err, data) {
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

  it('it requires options.to to exist', function(done) {

    var options = {
      apiKey: true,
      to: false
    };

    sendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.to/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.from to exist', function(done) {

    var options = {
      apiKey: true,
      to: true,
      from: false
    };

    sendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.from/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.subject to exist', function(done) {

    var options = {
      apiKey: true,
      to: true,
      from: true,
      subject: false
    };

    sendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.subject/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.message to exist', function(done) {

    var options = {
      apiKey: true,
      to: true,
      from: true,
      subject: true,
      message: false
    };

    sendMail(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.message/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });


  it('it returns a message on success', function(done) {

    var options = {
      apiKey: true,
      to: true,
      from: true,
      subject: true,
      message: true,
      dummyRun: true
    };

    sendMail(options, function(err, data) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(data.message, 'success');
      }
      done();
    });
  });

});