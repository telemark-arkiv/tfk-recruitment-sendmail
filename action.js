'use strict'

var sendMail = require('./lib/sendMail')
var options = {
  apiKey: process.env.API_KEY || 'yourSendGridAPIKey',
  apiUrl: process.env.API_URL || 'https://api.t-fk.no/recruitments',
  mailTo: process.env.MAIL_TO || 'mailfrom@example.com',
  mailFrom: process.env.MAIL_FROM || 'mailto@example.com'
}
var mail = {
  subject: 'This is a testmail',
  message: 'The time is: ' + new Date()
}

console.log('Jeg virker!')
console.log(options)

sendMail({
  apiKey: options.apiKey,
  to: options.mailTo,
  from: options.mailFrom,
  subject: mail.subject,
  message: mail.message
}, function (error, msg) {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log('success')
    process.exit(0)
  }
})
