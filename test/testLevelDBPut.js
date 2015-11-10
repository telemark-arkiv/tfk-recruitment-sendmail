'use strict'

var tap = require('tap')
var db = require('../lib/leveldb')

tap.test('It requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  db.put(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.key to exist', function (test) {
  var options = {
    key: false
  }
  var expectedErrorMessage = 'Missing required input: options.key'
  db.put(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.value to exist', function (test) {
  var options = {
    key: true,
    value: false
  }
  var expectedErrorMessage = 'Missing required input: options.value'
  db.put(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns a message on success', function (test) {
  var options = {
    key: 'testKey',
    value: 'testValue'
  }
  db.put(options, function errorIfMissingOptions (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.message, 'Data saved', 'Message')
    test.done()
  })
})
