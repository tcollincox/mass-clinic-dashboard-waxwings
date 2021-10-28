const express =  require("express");
const router = express.Router();
const referralCtrl = require("../Controllers/referralController.js");

router.get("/", referralCtrl.referralPage);

module.exports =  router;