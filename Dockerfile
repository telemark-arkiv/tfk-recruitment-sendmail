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
RUN npm run setupDocker

# Env variables
ENV API_KEY yourSendGridAPIKey
ENV API_URL https://api.t-fk.no/recruitments
ENV MAIL_FROM mailfrom@example.com
ENV MAIL_TO mailto@example.com
ENV CRON_SETTINGS 0 14 * * *

# Startup
ENTRYPOINT node cron.js
