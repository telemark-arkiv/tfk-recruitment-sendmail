'use strict';

var validUrl = require('valid-url');
var db = require('./lib/leveldb');
var getRecruitments = require('./lib/getRecruitments');
var createMessage = require('./lib/createMessage');
var sendMail = require('./lib/sendMail');

function recruitmentsSendMail(options, callback){
  if (!options) {
    return callback(new Error('Missing required input: options'), null);
  }
  if (!options.apiKey) {
    return callback(new Error('Missing required input: options.apiKey'), null);
  }
  if (!options.apiUrl) {
    return callback(new Error('Missing required input: options.apiUrl'), null);
  }
  if (options.apiUrl && !validUrl.isWebUri(options.apiUrl)) {
    return callback(new Error('options.apiUrl is an invalid url'), null);
  }
  if (!options.mailTo) {
    return callback(new Error('Missing required input: options.mailTo'), null);
  }
  if (!options.mailFrom) {
    return callback(new Error('Missing required input: options.mailFrom'), null);
  }

  var log = {
    NumberOfRecruitments: 0,
    NumberSendt: 0,
    NumberPreviousSendt: 0,
    LinksSendt:[],
    LinksNotSendt: []
  }

  return callback(null, log);

}

module.exports = recruitmentsSendMail;