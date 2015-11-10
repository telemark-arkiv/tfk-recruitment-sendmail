'use strict'

var tap = require('tap')
var db = require('../lib/leveldb')

tap.test('It requires a key', function (test) {
  var key = false
  var expectedErrorMessage = 'Missing required input: key'
  db.get(key, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('it will return error if key not found', function (test) {
  var key = 'YabbaDabbaDooooooo'
  db.get(key, function errorIfMissingOptions (error, data) {
    tap.ok(error.notFound, 'None found')
    test.done()
  })
})

tap.test('it returns value if key is found', function (test) {
  var key = 'testKey'
  db.get(key, function errorIfMissingOptions (error, data) {
    if (error) {
      throw error
    }
    tap.ok(data, 'testValue')
    test.done()
  })
})
