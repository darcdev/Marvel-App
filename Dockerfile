### STAGE 1:COMPILATION ###

FROM node:20-alpine3.19 as build

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN ng build --configuration=production


### STAGE 2:RUN ###

FROM nginx:1.17.1-alpine

COPY --from=build app/dist/marvel-app/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80