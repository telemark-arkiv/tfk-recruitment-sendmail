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

# Add crontab file in the cron directory
ADD crontab /etc/cron.d/hello-cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/hello-cron

# Create the log file
RUN touch /var/log/cron.log

# Startup
ENTRYPOINT ["doAction.sh"]

CMD ["cron"]