require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const message = require('./routes/messages');
const app = express();

/* Connects mongodb and returns error or not */
const mongoose = require('mongoose');

mongoose.connect(process.env.DEV_DATABASE);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
  console.log('Connection to MongoDB successful')
});

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/messages', express.static(path.join(__dirname, 'dist')));
app.use('/message', message);

// catch 404 and forward to error handler
app.use(function (req, res, next){
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next){
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
