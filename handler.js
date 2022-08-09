"use strict";
const {connectToDb} = require('./src/lib/database')
module.exports.endpoint = async (event) => {
  await connectToDb();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, the current time is ${new Date()}`,
        input: event,
      },
      null,
      2
    ),
  };
};
