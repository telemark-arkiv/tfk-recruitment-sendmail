'use strict'

var sendMails = require('./index')
var options = {
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  mailTo: process.env.MAIL_TO,
  mailFrom: process.env.MAIL_FROM
}

sendMails(options, function (error, message) {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
