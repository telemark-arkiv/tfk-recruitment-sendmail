###########################################################
#
# Dockerfile for tfk-recruitment-sendmail
#
###########################################################

# Setting the base to nodejs 4.4.0
FROM mhart/alpine-node:4.4.0

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV API_KEY yourSendGridAPIKey
ENV API_URL https://api.t-fk.no/recruitments
ENV MAIL_FROM mailfrom@example.com
ENV MAIL_TO mailto@example.com

# Startup
ENTRYPOINT node example
