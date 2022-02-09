const express = require('express');
const router = express.Router();
const Patients = require('../Models/twentyFivePerTelehealthReferred');

router.get('/', (req, res) => Patients.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator', ]})
.then(patients => {
	res.render('patients.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;