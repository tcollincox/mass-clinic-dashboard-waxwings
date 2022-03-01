const express =  require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('DashDemographics.ejs'));

module.exports =  router;
