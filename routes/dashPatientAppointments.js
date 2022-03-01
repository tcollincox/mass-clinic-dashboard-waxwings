const express =  require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('DashPatientAppointments.ejs'));

module.exports =  router;
