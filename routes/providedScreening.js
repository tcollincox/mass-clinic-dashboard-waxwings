const express = require('express');
const router = express.Router();
const Patients = require('../Models/providedScreening');

router.get('/', (req, res) => Patients.findAll({attributes: ['PatientAmount', 'RecordedYear' ]})
.then(patients => {
	res.render('providedScreening.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;