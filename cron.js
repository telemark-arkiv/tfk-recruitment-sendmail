'use strict'

var recruitmentsSendMail = require('./index')
var CronJob = require('cron').CronJob
var cronSettings = process.env.CRON_SETTINGS || '0 14 * * *'
var options = {
  apiKey: process.env.API_KEY || 'yourSendGridAPIKey',
  apiUrl: process.env.API_URL || 'https://api.t-fk.no/recruitments',
  mailTo: process.env.MAIL_TO || 'mailfrom@example.com',
  mailFrom: process.env.MAIL_FROM || 'mailto@example.com'
}
var mainJob = new CronJob(cronSettings, function () {
  recruitmentsSendMail(options, function (error, data) {
    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  })
}, null, true, 'Europe/Oslo')

mainJob
