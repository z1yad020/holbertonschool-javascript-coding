#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  const res = {};

  data.forEach((ob) => {
    if (ob.completed === true) {
      if (res[ob.userId]) {
        res[ob.userId] += 1;
      } else {
        res[ob.userId] = 1;
      }
    }
  })

  console.log(res);
})
