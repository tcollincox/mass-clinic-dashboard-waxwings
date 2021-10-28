const express =  require("express");
const router = express.Router();
const patientCTRL = require("../Controllers/patientController.js");

router.get("/", patientCTRL.patientsPage);

module.exports =  router;