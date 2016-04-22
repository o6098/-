var mongoose = require('mongoose');
mongoose.connect('mongodb://mikudata:22028222x@ds011790.mlab.com:11790/momongotest');
var sch = mongoose.Schema;

var songSchema = new sch({
  name: String,
  producer: String,
  link: String
});

module.exports = mongoose.model('Songs',songSchema);
