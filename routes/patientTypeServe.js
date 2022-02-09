const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientTypeServe');

router.get('/', (req, res) => Patient.findAll({attributes: ['PatientAmount', 'RecordedYear', 'PatientType', ]})
.then(patient => {
	res.render('patient.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;