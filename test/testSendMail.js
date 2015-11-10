'use strict'

var tap = require('tap')
var sendMail = require('../lib/sendMail')

tap.test('it requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.apiKey to exist', function (test) {
  var options = {
    apiKey: false
  }
  var expectedErrorMessage = 'Missing required input: options.apiKey'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.to to exist', function (test) {
  var options = {
    apiKey: true,
    to: false
  }
  var expectedErrorMessage = 'Missing required input: options.to'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.from to exist', function (test) {
  var options = {
    apiKey: true,
    to: true,
    from: false
  }
  var expectedErrorMessage = 'Missing required input: options.from'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.subject to exist', function (test) {
  var options = {
    apiKey: true,
    to: true,
    from: true,
    subject: false
  }
  var expectedErrorMessage = 'Missing required input: options.subject'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.message to exist', function (test) {
  var options = {
    apiKey: true,
    to: true,
    from: true,
    subject: true,
    message: false
  }
  var expectedErrorMessage = 'Missing required input: options.message'
  sendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns a message on success', function (test) {
  var options = {
    apiKey: true,
    to: true,
    from: true,
    subject: true,
    message: true,
    dummyRun: true
  }
  sendMail(options, function errorIfMissingOptions (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.message, 'success', 'Success!')
    test.done()
  })
})
