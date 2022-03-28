const express = require('express');
const router = express.Router();
const Patient = require('../Models/PatientRetention');

router.get('/', (req, res) => Patient.findAll({attributes: ['PatientAmount', 'AmountOfYears' ]})
.then(patient => {
	res.render('patientRetention.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;