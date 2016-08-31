'use strict'

const sendMails = require('./index')
const options = {
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  mailCc: process.env.MAIL_CC,
  mailTo: process.env.MAIL_TO,
  mailFrom: process.env.MAIL_FROM
}

sendMails(options, (error, message) => {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
