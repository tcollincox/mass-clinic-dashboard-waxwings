const express = require('express');
const router = express.Router();
const Patients = require('../Models/bloodPressure');
router.get('/', (req, res) => Patients.findAll({attributes: ['LevelOfControl', 'PatientAmount' ]})
.then(patients => {
res.render('bloodPressure.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;