###########################################################
#
# Dockerfile for tfk-recruitment-sendmail
#
###########################################################

# Setting the base to nodejs 4.2
FROM node:4.2

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm run setup

# Env variables
ENV API_KEY = yourSendGridAPIKey
ENV API_URL = urlToRecruitments
ENV MAIL_FROM = mailfrom@example.com
ENV MAIL_TO = mailto@example.com

# Startup
ENTRYPOINT node standalone.js