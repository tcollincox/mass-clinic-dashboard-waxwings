const express = require('express');
const router = express.Router();
const PatientArrivalTimes = require('../Models/patientArrivalTime');

router.get("/", (req, res) => PatientArrivalTimes.findAll({attributes: ['TimeArrived', 'PercentAmount', 'PatientAmount']})
.then(arrivalTimes => {
    res.render('patientArrivalTime.ejs', {patientArrivalTimes:arrivalTimes});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;