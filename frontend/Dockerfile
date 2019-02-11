FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
COPY angular.json /app/
COPY tsconfig.json /app/
COPY tslint.json /app/

RUN ["npm", "install"]

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "localhost", "--poll", "500"]
