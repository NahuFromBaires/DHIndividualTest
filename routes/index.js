
const path = require('path')
const express = require('express');
const router = express.Router();
const db = require('../database/db/models');
const { listenerCount } = require('process');

router.get('/', function(req, res, next) {
 
  db.sequelize.query('SELECT * FROM NOTAS')
    .then(function(resultados){
        
       
      
      console.log('Estoy en index ' + Date.now);
      console.log(resultados[0]);
      res.render( 'index',{notas: resultados[0]}
      
      ) 
       
      
      } //cierra callback 
      
      ); //Cierra then
 
  
  
  
  

});

router.get('/detail', function(req, res) {
  console.log('Estoy en detail');
  res.render( path.join(__dirname, '../views/detail') )

});




module.exports = router;
