const express =  require("express");
const router = express.Router();
const indexCtrl = require("../controllers/indexController.js");

router.get('/', indexCtrl.homepage);

module.exports =  router;
