const express = require('express');
const router = express.Router();
const Patients = require('../Models/diabetesBloodPressure');
router.get('/', (req, res) => Patients.findAll({attributes: ['LevelOfControl', 'PatientAmount' ]})
.then(patients => {
res.render('diabetesBloodPressure.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;