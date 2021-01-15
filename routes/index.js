
const path = require('path')
const express = require('express');
const router = express.Router();
const db = require('../database/db/models');
const { listenerCount } = require('process');

router.get('/', function(req, res, next) {
 
  db.sequelize.query('SELECT * FROM NOTAS')
    .then(function(resultados){
        
       
       req.body.notas = resultados[0];
      console.log(req.body.notas);
       
      
      } //cierra callback 
      
      ) //Cierra then
 
 
  res.render( path.join(__dirname, '../views/index') 
  
  
  )

});

router.get('/detail', function(req, res) {
  console.log('Estoy en detail');
  res.render( path.join(__dirname, '../views/detail') )

});




module.exports = router;
