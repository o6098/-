var Songs = require('../models/songs');

module.exports = function(req,res,next){
  Songs.find({},function(err,users){
    if(err) throw err;
    console.log('Innnnnndeeeeeeeexx');
    res.render('index',{userinfos:users});
  })
};
