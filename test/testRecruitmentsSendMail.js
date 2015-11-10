'use strict'

var tap = require('tap')
var recruitmentsSendMail = require('../index')

tap.test('it requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.apiKey to exist', function (test) {
  var options = {
    apiKey: false
  }
  var expectedErrorMessage = 'Missing required input: options.apiKey'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.apiUrl to exist', function (test) {
  var options = {
    apiKey: true,
    apiUrl: false
  }
  var expectedErrorMessage = 'Missing required input: options.apiUrl'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.apiUrl to a valid url', function (test) {
  var options = {
    apiKey: true,
    apiUrl: 'pysjevev'
  }
  var expectedErrorMessage = 'options.apiUrl is an invalid url'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.mailTo to exist', function (test) {
  var options = {
    apiKey: true,
    apiUrl: 'http://www.telemark.no',
    mailTo: false
  }
  var expectedErrorMessage = 'Missing required input: options.mailTo'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires options.mailFrom to exist', function (test) {
  var options = {
    apiKey: true,
    apiUrl: 'http://www.telemark.no',
    mailTo: true,
    mailFrom: false
  }
  var expectedErrorMessage = 'Missing required input: options.mailFrom'
  recruitmentsSendMail(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
