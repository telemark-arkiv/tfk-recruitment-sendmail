[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/telemark/tfk-recruitment-sendmail.svg?branch=master)](https://travis-ci.org/telemark/tfk-recruitment-sendmail)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-recruitment-sendmail.svg)](https://greenkeeper.io/)

# tfk-recruitment-sendmail

Sends mail if there are new openings

## Requirements
You'll need a [SendGrid](https://sendgrid.com/) account and an API-key.

You'll need an API for recruitments similiar to the one used by [Telemark fylkeskommune](https://api.t-fk.no/recruitments).

## Installation
```
$ git clone git@github.com:telemark/tfk-recruitment-sendmail.git
```

## Setup
```
$ npm run setup
```

## Test
```
$ npm test
```

## Usage

```javascript
'use strict'

var recruitmentsSendMail = require('tfk-recruitment-sendmail')

var options = {
  apiKey: 'your-sendgrid-api-key',
  apiUrl: 'https://api.t-fk.no/recruitments',
  mailTo: 'you@example.com',
  mailFrom: 'me@example.com',
  mailCc: 'anotherme@example.com'
}

recruitmentsSendMail(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

Example of returned data

```sh
Found a total of 11 jobs
This job is fresh! https://hrm.btvregion.no/tfk_recruitment/jobid/2633
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2665
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2666
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2662
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2638
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2639
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2656
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2651
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2652
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2654
This job is previously published: https://hrm.btvregion.no/tfk_recruitment/jobid/2655
Mail delivered
{"message":"success"}
{ jobsDone: 11, newJobs: 1, oldJobs: 10 }
```

## Docker
To run this module as a service use the docker image.

Change the ENV parts of the [Dockerfile](Dockerfile) or use [docker.env](docker.env)

Build
```sh
$ docker build -t tfk-recruitment-sendmail .
```

Run a container

```sh
$ docker run --rm tfk-recruitment-sendmail 
```

or

```sh
$ docker run --env-file=docker.env --rm tfk-recruitment-sendmail 
```

This will spin up a container. Do the jobs. Shut it down and remove it.
