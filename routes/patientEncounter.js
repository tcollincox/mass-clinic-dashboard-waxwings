const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientEncounter');

router.get('/', (req, res) => Patient.findAll({attributes: ['PatientAmount', 'RecordedYear', 'TargetNumber', ]})
.then(patient => {
	res.render('patientEncounter.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;