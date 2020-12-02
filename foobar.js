'use strict';

module.exports.info = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'So this is what the event parameter gives us:',
        input: event,
      },
      null,
      2
    ),
  };
};
