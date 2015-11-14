[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/telemark/tfk-recruitment-sendmail.svg?branch=master)](https://travis-ci.org/telemark/tfk-recruitment-sendmail)

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
  mailFrom: me@example.com
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

```javascript
 NumberOfRecruitments: 11,
  NumberSendt: 11,
  NumberPreviousSendt: 0,
  LinksSendt: 
   [ 'https://hrm.btvregion.no/tfk_recruitment/jobid/2488',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2494',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2489',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2502',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2492',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2501',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2493',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2499',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2434',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2500',
     'https://hrm.btvregion.no/tfk_recruitment/jobid/2487' ],
  LinksNotSendt: [] }
```

## Docker
To run this module as a service use the docker image.

Change the ENV parts of the [Dockerfile](Dockerfile) and start a build

```sh
$ docker build -t tfk-recruitment-sendmail .
```

Start a container

```sh
$ docker run -d tfk-recruitment-sendmail 
```

and you'll have a service to check for new openings and send mail at the interval specified in the CRON_SETTINGS
