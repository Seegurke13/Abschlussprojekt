FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
COPY angular.json /app/
COPY tsconfig.json /app/
COPY tslint.json /app/

RUN ["npm", "install"]

EXPOSE 4200/tcp

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]
