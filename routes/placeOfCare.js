const express = require('express');
const router = express.Router();
const Patient = require('../Models/placeOfCare');

router.get('/', (req, res) => Patient.findAll({attributes: ['AppttypeGroup', 'AppttypeSpecific', 'PatientEncounters', 'UniquePatients', ]})
.then(patient => {
	res.render('placeOfCare.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;