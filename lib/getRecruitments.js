'use strict'

const https = require('https')
const validUrl = require('valid-url')

module.exports = (url, callback) => {
  let body = ''

  if (!url) {
    return callback(new Error('Missing required input: url'), null)
  }
  if (url && !validUrl.isWebUri(url)) {
    return callback(new Error('Invalid url'), null)
  }

  https.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString()
    })

    res.on('end', function () {
      return callback(null, JSON.parse(body))
    })
  }).on('error', function (error) {
    return callback(error, null)
  })
}
