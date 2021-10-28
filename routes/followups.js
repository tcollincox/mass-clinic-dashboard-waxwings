const express =  require("express");
const router = express.Router();
const followupsCTRL = require("../Controllers/followupsController.js");

router.get("/", followupsCTRL.followupsPage);

module.exports =  router;