
const path = require('path')
const express = require('express');
const router = express.Router();
const db = require('../database/db/models');
const { listenerCount } = require('process');

router.get('/', function(req, res) {
  res.render( path.join(__dirname, '../views/index') )

});

router.get('/detail', function(req, res) {
  res.render( path.join(__dirname, '../views/detail') )

});


router.get('/notas', function(req, res, next) {

    db.sequelize.query('SELECT * FROM NOTAS')
    .then(function(resultados){
        
       
        for(let i = 0; i<=resultados.length;i++){
          console.log(
          resultados[0][i]);
        };
       res.send('holis')
      
      } //cierra callback 
      
      ) //Cierra then
    
});


module.exports = router;
