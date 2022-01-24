const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Referrals = require('../Models/applications');

router.get("/", (req, res) => Referrals.findAll({attributes: ['ApplicationType', 'PatientAmount', 'RecordedYear']})
.then(apps => {
    res.render('applications.ejs', {applications:apps});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;