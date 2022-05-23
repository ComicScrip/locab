FROM node:lts-alpine3.14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying source files
COPY . /usr/src/app

# Installing dependencies
RUN yarn

# Setup environment variables
ARG DATABASE_URL=${DATABASE_URL}
ARG NEXT_PUBLIC_HCAPTCHA_SITEKEY=${NEXT_PUBLIC_HCAPTCHA_SITEKEY}
ARG NEXT_PUBLIC_UPLOADCARE_KEY=${NEXT_PUBLIC_UPLOADCARE_KEY}

# Building app
RUN yarn run pre-start

EXPOSE $PORT

# Running the app
CMD "yarn" "start"
