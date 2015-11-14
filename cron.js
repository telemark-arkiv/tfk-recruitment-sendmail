'use strict'

var CronJob = require('cron').CronJob

var mainJob = new CronJob('* * * * *', function () {
  console.log('You will see this message every minute')
}, null, true, 'Europe/Oslo')

mainJob
