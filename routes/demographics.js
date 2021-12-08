const express =  require("express");
const router = express.Router();
const demographicsCtrl = require("../Controllers/demographicsController.js");

router.get("/", demographicsCtrl.demographicsPage);

module.exports = router;