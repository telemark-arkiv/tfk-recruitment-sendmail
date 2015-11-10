'use strict'

var db = require('./lib/leveldb')
var options = {
  key: 'testKey',
  value: 'testValue'
}

db.put(options, function errorIfMissingOptions (error, data) {
  if (error) {
    throw error
  } else {
    console.log(data)
    console.log('Everything\'s shiny, Cap\'n. Not to fret.')
  }
})
