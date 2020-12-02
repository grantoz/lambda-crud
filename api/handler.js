'use strict';

module.exports.home = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Welcome to my app, v1.0!'
      },
      null,
      2
    ),
  };
};

module.exports.hello = (event, context, callback) => {
  let dynamicHtml = '<p>Hey there, unknown person!</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.name) {
    dynamicHtml = `<p>Hey there, ${event.queryStringParameters.name}!</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>Landing Page</h1>
      ${dynamicHtml}
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};