const express =  require("express");
const router = express.Router();
const insuranceCtrl = require("../Controllers/insuranceController.js");

router.get("/", insuranceCtrl.insurancePage);

module.exports =  router;