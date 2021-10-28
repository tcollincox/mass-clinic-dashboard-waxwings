const express =  require("express");
const router = express.Router();
const volCTRL = require("../Controllers/volunteerController.js");

router.get("/", volCTRL.volunteersPage);

module.exports =  router;