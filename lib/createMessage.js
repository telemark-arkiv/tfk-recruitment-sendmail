'use strict'

function fixDate (datestring) {
  var dateList = datestring.split('-')

  return dateList[2] + '.' + dateList[1] + '.' + dateList[0]
}

function createMessage (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.title) {
    return callback(new Error('Missing required input: options.title'), null)
  }
  if (!options.locationName) {
    return callback(new Error('Missing required input: options.locationName'), null)
  }
  if (!options.positionType) {
    return callback(new Error('Missing required input: options.positionType'), null)
  }
  if (!options.deadline) {
    return callback(new Error('Missing required input: options.deadline'), null)
  }
  if (!options.link) {
    return callback(new Error('Missing required input: options.link'), null)
  }

  var subject = 'Ledig stilling: '
  var message = 'Stilling: '
  var data = {}

  subject += options.title
  message += options.title + '\n'
  message += 'Type: ' + options.positionType + '\n'
  message += 'Arbeidssted: ' + options.locationName + '\n'
  message += 'Søknadsfrist: ' + fixDate(options.deadline) + '\n'
  message += 'Se hele stillingsutlysningen: ' + options.link + '\n'

  data.subject = subject
  data.message = message

  return callback(null, data)
}

module.exports = createMessage
