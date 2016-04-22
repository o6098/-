var Songs = require('../models/songs');

module.exports = function(req,res,next){
  Songs.findOne({_id: req.params.id},function(err, user){
    if(err) throw err;
    console.log('reaaaaaaaaaaaaaad oonnnnnnnneeeee');
    res.json({userinfo:user});
  });
};
