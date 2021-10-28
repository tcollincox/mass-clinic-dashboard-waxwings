const express =  require("express");
const router = express.Router();
const mVolCTRL = require("../Controllers/med_volunteerController.js");

router.get("/", mVolCTRL.med_volunteersPage);

module.exports =  router;