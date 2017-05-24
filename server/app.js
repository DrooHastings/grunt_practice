var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var heroRouter = require('./routes/hero');
require('./modules/db');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static('./server/public'));

// routers
app.use('/', indexRouter);
app.use('/hero', heroRouter);

// server port set and listen
var serverPort = process.env.port || 3001;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});
