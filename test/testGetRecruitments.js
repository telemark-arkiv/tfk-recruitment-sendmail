'use strict'

var tap = require('tap')
var getRecruitments = require('../lib/getRecruitments')

tap.test('url must be supplied', function (test) {
  var url = false
  var expectedErrorMessage = 'Missing required input: url'
  getRecruitments(url, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it requires url to be valid', function (test) {
  var url = 'pysjevev'
  var expectedErrorMessage = 'Invalid url'
  getRecruitments(url, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it returns an array if succesful', function (test) {
  var url = 'https://api.t-fk.no/recruitments'
  getRecruitments(url, function errorIfMissingOptions (error, data) {
    if (error) {
      throw error
    }
    tap.equal(Array.isArray(data), true, 'Array OK')
    test.done()
  })
})
