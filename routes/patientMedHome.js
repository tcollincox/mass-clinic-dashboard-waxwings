const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientMedHome');
router.get('/', (req, res) => Patient.findAll({attributes: ['AmountOfYears', 'PatientAmount']})
.then(patient => {
res.render('patientMedHome.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;