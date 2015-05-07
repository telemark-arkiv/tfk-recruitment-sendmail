'use strict';

var assert = require('assert');
var createMessage = require('../lib/createMessage');

describe('createMessage', function() {

  it('it requires an options object', function(done) {

    var options = false;

    createMessage(options, function(err, data) {
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

  it('it requires options.title to exists', function(done) {

    var options = {
      title: false
    };

    createMessage(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.title/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.locationName to exists', function(done) {

    var options = {
      title: true,
      locationName: false
    };

    createMessage(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.locationName/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.positionType to exists', function(done) {

    var options = {
      title: true,
      locationName: true,
      positionType: false
    };

    createMessage(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.positionType/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.deadline to exists', function(done) {

    var options = {
      title: true,
      locationName: true,
      positionType: true,
      deadline: false
    };

    createMessage(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.deadline/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it requires options.link to exists', function(done) {

    var options = {
      title: true,
      locationName: true,
      positionType: true,
      deadline: true,
      link: false
    };

    createMessage(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.link/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('it returns a correct formatted message on success', function(done) {

    var options = require('./data/job.json');
    var messageData = require('./data/message.json');


    createMessage(options, function(err, data) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(data.message, messageData.message);
        assert.equal(data.subject, messageData.subject);
      }
      done();
    });
  });

});