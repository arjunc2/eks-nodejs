// before run
// npm install express

// to run 
// npm start

'use strict';

const express = require('express');
const OS = require('os');
const ENV = 'DEV';

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from EKS Universee';
  res.send(getPage(msg));
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(getPage(msg));
});

// Only start the server if not in test environment
if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
}

// Export the app for testing
module.exports = app;

function getPage(message) {
  return (
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<style>\n" +
    "body, html {\n" +
    "  height: 100%;\n" +
    "  margin: 0;\n" +
    "}\n" +
    ".bgimg {\n" +
    "  background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');\n" +
    "  height: 100%;\n" +
    "  background-position: center;\n" +
    "  background-size: cover;\n" +
    "  position: relative;\n" +
    "  color: white;\n" +
    "  font-family: \"Courier New\", Courier, monospace;\n" +
    "  font-size: 25px;\n" +
    "}\n" +
    ".topleft {\n" +
    "  position: absolute;\n" +
    "  top: 0;\n" +
    "  left: 16px;\n" +
    "}\n" +
    ".bottomleft {\n" +
    "  position: absolute;\n" +
    "  bottom: 0;\n" +
    "  left: 16px;\n" +
    "}\n" +
    ".middle {\n" +
    "  position: absolute;\n" +
    "  top: 50%;\n" +
    "  left: 50%;\n" +
    "  transform: translate(-50%, -50%);\n" +
    "  text-align: center;\n" +
    "}\n" +
    "hr {\n" +
    "  margin: auto;\n" +
    "  width: 40%;\n" +
    "}\n" +
    "</style>\n" +
    "<body>\n" +
    "<div class=\"bgimg\">\n" +
    "  <div class=\"topleft\">\n" +
    "    <p>ENVIRONMENT: " + ENV + "</p>\n" +
    "  </div>\n" +
    "  <div class=\"middle\">\n" +
    "    <h1>Host/container name</h1>\n" +
    "    <hr>\n" +
    "    <p>" + OS.hostname() + "</p>\n" +
    "  </div>\n" +
    "  <div class=\"bottomleft\">\n" +
    "    <p>" + message + "</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</body>\n" +
    "</html>\n"
  );
}
