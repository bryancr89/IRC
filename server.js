var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var channel = require('./routes/channel');
var server = express();
var environment = require('./config/environment')(server.get('env'));

mongoose.createConnection('mongodb://localhost/irc');

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

// uncomment after placing your favicon in /assets
//server.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, environment.pathPublicFiles)));

server.use('/', routes);
server.use('/channel', channel);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler will print stack-trace
if (environment.showStackTrace) {
	server.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler no stack-traces leaked to user
server.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = server;
