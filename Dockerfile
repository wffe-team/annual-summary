FROM  mhart/alpine-node:latest

MAINTAINER yangsj <guobayang@gmail.com>

ADD AnnualSummary /AnnualSummary

WORKDIR /AnnualSummary

RUN npm install --production && npm cache clean

EXPOSE 3000

CMD ["node", "/AnnualSummary/AnnualSummary/bin/www"]
