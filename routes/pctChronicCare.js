const express = require('express');
const router = express.Router();
const Patient = require('../Models/pctChronicCare');

router.get('/', (req, res) => Patient.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator' ]})
.then(Patient => {
	res.render('pctChronicCare.ejs', {Patient:Patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;