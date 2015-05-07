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

  var totalJobs = 0;
  var jobsDone = 0;
  var log = {
    NumberOfRecruitments: 0,
    NumberSendt: 0,
    NumberPreviousSendt: 0,
    LinksSendt:[],
    LinksNotSendt: []
  };

  function areWeDoneYet(){
    jobsDone ++;
    if (totalJobs == jobsDone) {
      return callback(null, log);
    }
  }

  getRecruitments(options.apiUrl, function(error, jobs){
    if (error) {
      return callback(error, null);
    } else {

      log.NumberOfRecruitments = jobs.length;
      totalJobs = jobs.length;

      jobs.forEach(function(job){
        db.get(job.jobid, function(err, data){
          if (err && err.type === 'NotFoundError') {

            createMessage(job, function(er, mail){
              if(er){
                return callback(er, null)
              } else {
                sendMail({
                  apiKey: options.apiKey,
                  to: options.mailTo,
                  from: options.mailFrom,
                  subject: mail.subject,
                  message: mail.message
                }, function(e, msg){
                  if(e){
                    return callback(e, null)
                  } else {
                    log.NumberSendt++;
                    log.LinksSendt.push(job.link);
                    db.put({key:job.jobid, value:job}, function(feil, putMsg){
                      if(feil){
                        return callback(feil, null);
                      } else {
                        areWeDoneYet();
                      }
                    })
                  }
                });

              }
            });


          } else {
            log.NumberPreviousSendt++;
            log.LinksNotSendt.push(job.link);
            areWeDoneYet();
          }
        });

      });
    }
  });
}

module.exports = recruitmentsSendMail;