const followupsModel = require("../Models/followups");


exports.followupsPage = (req,res) => {

    const followups = followupsModel.getFollowups();

    res.render('followups.ejs', {followups: followups});
}

