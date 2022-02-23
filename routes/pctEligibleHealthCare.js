const express = require('express');
const router = express.Router();
const Patients = require('../Models/pctEligibleHealthCare');

router.get('/', (req, res) => Patients.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator']})
.then(patients => {
	res.render('pctEligibleHealthCare.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;