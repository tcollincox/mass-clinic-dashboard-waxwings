const express = require('express');
const router = express.Router();
const Patients = require('../Models/bloodA1C');
router.get('/', (req, res) => Patients.findAll({attributes: ['TimePeriod', 'NumDom', 'TotalPercent', 'PatientAmountSpecifc', 'PatientAmountTotal' ]})
.then(patients => {
res.render('bloodA1C.ejs', {patients:patients});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;