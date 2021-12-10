const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Referrals = require('../Models/referral');

router.get("/", (req, res) => Referrals.findAll({attributes: ['ToFrom', 'PatientAmount', 'RecordedYear']})
.then(refs => {
    res.render('referrals.ejs', {referrals:refs});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;