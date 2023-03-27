FROM node:14.20.0-alpine
ARG BUILD_PARAMETERS
ARG PUBLIC_URL

RUN mkdir /worker
WORKDIR /worker
ADD . .
RUN yarn --silent
RUN yarn run build $BUILD_PARAMETERS
