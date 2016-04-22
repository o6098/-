var express = require('express');
var create = require('../controllers/create');
var del = require('../controllers/delete');
var index = require('../controllers/index');
var read = require('../controllers/read');
var readall = require('../controllers/readall');
var update = require('../controllers/update');
var rou = express.Router();

rou.route('/').get(index);
rou.route('/song')
  .get(readall)
  .post(create);
rou.route('/song/:id')
  .get(read)
  .put(update)
  .delete(del);

module.exports = rou;
