const express = require('express');
const router = express.Router();
const Patient = require('../Models/uniquePatientInYear');
router.get('/', (req, res) => Patient.findAll({attributes: ['AmountOfYears', 'PatientAmount']})
.then(patient => {
res.render('uniquePatientInYear.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;