var Songs = require('../models/songs');

module.exports = function(req,res,next){
  Songs.findOneAndRemove({_id: req.params.id},function(err){
    if(err) throw err;
    console.log('deleeeeeeeeeeeeeeeeeeeeeete');
    Songs.find({},function(err,users){
      if(err) throw err;
      res.json({userinfos: users});
    });
  });
};
