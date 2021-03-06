var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MassClinicDb = require('./config/database');

var indexRouter = require('./routes/index');
const dashDemographicsRouter = require("./routes/dashDemographics.js")
const dashPatientAppointmentsRouter = require("./routes/dashPatientAppointments.js")
const dashPatientGoalOutcomesRouter = require("./routes/dashPatientGoalOutcomes.js")
const dashPatientEncounteredRouter = require("./routes/dashPatientsEncountered.js")
const referralsRouter = require("./routes/patientReferredMassClinic.js");
const demographicsRouter = require("./routes/demographics.js");
const followups = require("./routes/followups.js")
const volunteers = require("./routes/volunteer.js");
const applications = require('./routes/applications.js');
const patientArrivalTimes = require("./routes/patientArrivalTime.js");
const patientAccessibility = require("./routes/patientAccessibility.js");
const pctTwentyPerReferral = require("./routes/pctTwentyPerReferral.js");
const pctPrescriptApp = require("./routes/pctPrescriptApp.js");
const hbA1CRouter = require("./routes/hbA1C.js");
const pctFiftyPerGeneralFollowUp = require("./routes/pctFiftyPerGeneralFollowUp.js");
const patientEncounter = require('./routes/patientEncounter.js');
const pctEligibleHealthCare = require('./routes/pctEligibleHealthCare.js');
const pctChronicCare = require('./routes/pctChronicCare.js');
const bloodPressure = require('./routes/bloodPressure.js');
const cholesterolRouter = require('./routes/cholesterol.js');
const noShowPatientRouter = require('./routes/noShowPatient.js');
const patientEnrollYearRouter = require('./routes/patientEnrollYear.js');
const twentyFivePerTelehealthReferredRouter = require('./routes/twentyFivePerTelehealthReferred.js');
const providedScreeningRouter = require('./routes/providedScreening.js');
const patientReferredToTelehealthRouter = require('./routes/patientReferredToTelehealth.js');
const patientTypeServeRouter = require('./routes/patientTypeServe.js');
const placeOfCareRouter = require('./routes/placeOfCare.js');
const uniquePatientInYearRouter = require('./routes/uniquePatientInYear.js');
const patientRetention = require('./routes/patientRetention.js');
const diabetesBloodPressure = require('./routes/diabetesBloodPressure.js');

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
app.use("/dashDemographics", dashDemographicsRouter);
app.use("/dashPatientAppointments", dashPatientAppointmentsRouter);
app.use("/dashPatientGoalOutcomes", dashPatientGoalOutcomesRouter);
app.use("/dashPatientsEncountered", dashPatientEncounteredRouter);
app.use("/patientReferredMassClinic", referralsRouter);
app.use("/demographics", demographicsRouter);
app.use("/followups", followups);
app.use("/volunteers",volunteers);
app.use("/applications", applications);
app.use("/patientArrivalTime", patientArrivalTimes);
app.use("/patientAccessibility", patientAccessibility);
app.use("/pctTwentyPerReferral", pctTwentyPerReferral);
app.use("/pctPrescriptApp", pctPrescriptApp);
app.use("/hbA1C", hbA1CRouter);
app.use("/pctFiftyPerGeneralFollowUp", pctFiftyPerGeneralFollowUp);
app.use("/patientEncounter", patientEncounter);
app.use("/pctEligibleHealthCare", pctEligibleHealthCare);
app.use("/pctChronicCare", pctChronicCare);
app.use("/bloodPressure", bloodPressure);
app.use("/cholesterol",cholesterolRouter);
app.use("/noShowPatient", noShowPatientRouter);
app.use("/patientEnrollYear", patientEnrollYearRouter);
app.use("/twentyFivePerTelehealthReferred", twentyFivePerTelehealthReferredRouter);
app.use("/providedScreening", providedScreeningRouter);
app.use("/patientReferredToTelehealth", patientReferredToTelehealthRouter);
app.use("/patientTypeServe", patientTypeServeRouter);
app.use("/placeOfCare", placeOfCareRouter);
app.use("/uniquePatientInYear", uniquePatientInYearRouter);
app.use("/patientRetention", patientRetention);
app.use("/diabetesBloodPressure", diabetesBloodPressure);


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
