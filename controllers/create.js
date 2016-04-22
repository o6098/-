var Songs = require('../models/songs');

module.exports = function(req,res,next) {
  var song = new Songs(req.body);
  song.save(function(err){
    if(err) throw err;
    console.log('creaaaaaaaaaaaaate');
    Songs.find({}, function(err, users){
      if(err) throw err;
      console.log('resssssponnnnnseee');
      res.json({userinfos:users});
    });
  });
}
