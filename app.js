var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MassClinicDb = require('./config/database');

var indexRouter = require('./routes/index');
const referralsRouter = require("./routes/patientReferredMassClinic.js");
const demographicsRouter = require("./routes/demographics.js");
const followups = require("./routes/followups.js")
const volunteers = require("./routes/volunteer.js");
const applications = require('./routes/applications.js');
const patientArrivalTimes = require("./routes/patientArrivalTime.js");
const patientAccessibility = require("./routes/patientAccessibility.js");
const pctTwentyPerReferral = require("./routes/pctTwentyPerReferral.js");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use("/patientReferredMassClinic", referralsRouter);
app.use("/demographics", demographicsRouter);
app.use("/followups", followups);
app.use("/volunteers",volunteers);
app.use("/applications", applications);
app.use("/patientArrivalTime", patientArrivalTimes);
app.use("/patientAccessibility", patientAccessibility);
app.use("/pctTwentyPerReferral", pctTwentyPerReferral);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

try {
  MassClinicDb.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
} 
