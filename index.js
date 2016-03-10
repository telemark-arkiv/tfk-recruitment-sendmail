'use strict'

var validUrl = require('valid-url')
var getRecruitments = require('./lib/getRecruitments')
var createMessage = require('./lib/createMessage')
var sendMail = require('./lib/sendMail')
var fixDate = require('./lib/fix-date')

function recruitmentsSendMail (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.apiKey) {
    return callback(new Error('Missing required input: options.apiKey'), null)
  }

  if (!options.apiUrl) {
    return callback(new Error('Missing required input: options.apiUrl'), null)
  }

  if (options.apiUrl && !validUrl.isWebUri(options.apiUrl)) {
    return callback(new Error('options.apiUrl is an invalid url'), null)
  }

  if (!options.mailTo) {
    return callback(new Error('Missing required input: options.mailTo'), null)
  }

  if (!options.mailFrom) {
    return callback(new Error('Missing required input: options.mailFrom'), null)
  }

  var dagens = fixDate()
  var totalJobs = 0
  var jobsDone = 0
  var newJobs = 0
  var oldJobs = 0

  function areWeDoneYet () {
    jobsDone++
    if (totalJobs === jobsDone) {
      return callback(null, {jobsDone: jobsDone, newJobs: newJobs, oldJobs: oldJobs})
    }
  }

  function handleMessage (error, mail) {
    if (error) {
      return callback(error, null)
    } else {
      sendMail({
        apiKey: options.apiKey,
        to: options.mailTo,
        from: options.mailFrom,
        subject: mail.subject,
        message: mail.message
      }, function (err, msg) {
        if (err) {
          return callback(err, null)
        } else {
          console.log('Mail delivered')
          console.log(JSON.stringify(msg))
          areWeDoneYet()
        }
      })
    }
  }

  function handleRecruitments (error, jobs) {
    if (error) {
      return callback(error, null)
    } else {
      console.log('Found a total of ' + jobs.length + ' jobs')
      totalJobs = jobs.length

      jobs.forEach(function (job) {
        if (dagens === job.published) {
          console.log('This job is fresh! ' + job.link)
          newJobs++
          createMessage(job, handleMessage)
        } else {
          console.log('This job is previously published: ' + job.link)
          oldJobs++
          areWeDoneYet()
        }
      })
    }
  }

  getRecruitments(options.apiUrl, handleRecruitments)
}

module.exports = recruitmentsSendMail
