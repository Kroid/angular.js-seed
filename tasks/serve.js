'use strict';

var minimist = require('minimist');
var modRewrite = require('connect-modrewrite');
var Server = require('frontend-dev-server');

var argv = require('minimist')(process.argv.slice(2));
var proxyUrl = argv.proxy || 'http://127.0.0.1:3000';
var port = argv.port || argv.p;

var server = new Server({
  root: ['./.tmp', './app'],
  middlewares: [
    modRewrite([ '!\\.\\w+$ /index.html [L]' ])
  ],
  proxy: {
    '/api/': proxyUrl,
  },
});

server.start(port);
