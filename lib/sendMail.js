'use strict'

function sendMail (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.apiKey) {
    return callback(new Error('Missing required input: options.apiKey'), null)
  }
  if (!options.to) {
    return callback(new Error('Missing required input: options.to'), null)
  }
  if (!options.from) {
    return callback(new Error('Missing required input: options.from'), null)
  }
  if (!options.subject) {
    return callback(new Error('Missing required input: options.subject'), null)
  }
  if (!options.message) {
    return callback(new Error('Missing required input: options.message'), null)
  }
  if (options.dummyRun === true) {
    return callback(null, { message: 'success' })
  }

  var sendgrid = require('sendgrid')(options.apiKey)
  var email = new sendgrid.Email({
    to: options.to,
    from: options.from,
    subject: options.subject,
    text: options.message
  })

  sendgrid.send(email, function (error, json) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, json)
    }
  })
}

module.exports = sendMail
