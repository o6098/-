var Songs = require('../models/songs');

module.exports = function(req,res,next) {
  Songs.findOneAndUpdate({_id: req.params.id},req.body,function(err,users){
    if(err) throw err;
    console.log('UppppppppppDAAAAAAAAAAAAAte');
    Songs.find({},function(err,users){
      if(err) throw err;
      res.json({userinfos:users});
    });
  });
};
