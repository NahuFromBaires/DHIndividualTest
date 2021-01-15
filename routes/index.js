
const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render( path.join(__dirname, '../views/index') )

});

router.get('/detail', function(req, res) {
  res.render( path.join(__dirname, '../views/detail') )

});



module.exports = router;
