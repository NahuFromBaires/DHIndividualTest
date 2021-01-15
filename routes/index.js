
const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render( path.join(__dirname, '../views/index') )

});

router.get('/detail', function(req, res) {
  res.render( path.join(__dirname, '../views/detail') )

});

let db = require('../database/db/models');
router.get('/notas', function(req, res, next) {

    db.sequelize.query('SELECT * FROM NOTAS')
    .then(resultados => res.send(resultados[0]))
    
});


module.exports = router;
