const express =  require("express");
const router = express.Router();
const optionsCtrl = require("../Controllers/optionsController");

router.get("/", optionsCtrl.optionPage);

module.exports = router;

//test comment
//test comment 2
