const express = require('express');
const router = express.Router();
const Volunteers = require('../Models/volunteer');

router.get("/", (req, res) => Volunteers.findAll({attributes: ['VolunteerType', 'VolunteerAmount', 'RecordedYear']})
.then(vols => {
    res.render('volunteers.ejs', {volunteers:vols});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;