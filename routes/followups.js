const express = require('express');
const router = express.Router();
const Followups = require('../Models/followups');

router.get("/", (req, res) => Followups.findAll({attributes: ['PatientType', 'PatientAmount', 'RecordedYear']})
.then(followups => {
    res.render('followups.ejs', {followups:followups});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;