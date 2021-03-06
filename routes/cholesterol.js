const express = require('express');
const router = express.Router();
const Patients = require('../Models/cholesterol');
router.get('/', (req, res) => Patients.findAll({attributes: ['LevelOfControl', 'PatientAmount' ]})
.then(patients => {
res.render('cholesterol.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;