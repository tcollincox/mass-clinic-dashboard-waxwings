const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientReferedToTelehealth');

router.get('/', (req, res) => Patient.findAll({attributes: ['PatientType', 'PatientAmount', 'RecordedYear' ]})
.then(patient => {
	res.render('patientReferedToTelehealth.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;