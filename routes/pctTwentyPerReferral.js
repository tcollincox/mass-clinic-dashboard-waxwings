const express = require('express');
const router = express.Router();
const Patients = require('../Models/pctTwentyPerReferral');

router.get('/', (req, res) => Patients.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator', 'PatientType']})
.then(patients => {
	res.render('pctTwentyPerReferral.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;