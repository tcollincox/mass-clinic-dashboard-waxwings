const express = require('express');
const router = express.Router();
const Patient = require('../Models/pctFiftyPerGeneralFollowUp');

router.get('/', (req, res) => Patient.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator', 'PatientType']})
.then(patient => {
	res.render('pctFiftyPerGeneralFollowUp.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;