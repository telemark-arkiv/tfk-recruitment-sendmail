'use strict'

var tap = require('tap')
var createMessage = require('../lib/createMessage')

tap.test('Options object must be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.title must be supplied', function (test) {
  var options = {
    title: false
  }
  var expectedErrorMessage = 'Missing required input: options.title'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.locationName must be supplied', function (test) {
  var options = {
    title: true,
    locationName: false
  }
  var expectedErrorMessage = 'Missing required input: options.locationName'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.positionType must be supplied', function (test) {
  var options = {
    title: true,
    locationName: true,
    positionType: false
  }
  var expectedErrorMessage = 'Missing required input: options.positionType'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.deadline must be supplied', function (test) {
  var options = {
    title: true,
    locationName: true,
    positionType: true,
    deadline: false
  }
  var expectedErrorMessage = 'Missing required input: options.deadline'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.link must be supplied', function (test) {
  var options = {
    title: true,
    locationName: true,
    positionType: true,
    deadline: true,
    link: false
  }
  var expectedErrorMessage = 'Missing required input: options.link'
  createMessage(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns a correct formatted message on success', function (test) {
  var options = require('./data/job.json')
  var messageData = require('./data/message.json')

  createMessage(options, function errorIfMissingOptions (error, data) {
    if (error) {
      throw error
    }
    tap.equal(messageData.message, data.message, 'Message is equal')
    tap.equal(messageData.subject, data.subject, 'Subject is equal')
    test.done()
  })
})
