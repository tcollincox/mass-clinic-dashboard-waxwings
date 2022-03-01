const express = require('express');
const router = express.Router();
const Patient = require('../Models/pctChronicCare');

router.get('/', (req, res) => Patient.findAll({attributes: ['TargetPercent', 'PercentAchived', 'RecordedYear', 'Numerator', 'Denominator' ]})
.then(patient => {
	res.render('pctChronicCare.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;