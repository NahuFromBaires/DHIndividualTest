const db = require('../database/db/models');
const path = require('path')

module.exports = 

{
    traeNotas: function(req, res, next) 
        { 
            db.sequelize.query('SELECT * FROM NOTAS') //QUERY
            .then(function(resultados){
            res.render( 'index',{notas: resultados[0]} ) //Envia datos
            });
         },
    
    Edita: function(req, res, next) 
        {
            db.sequelize.query('SELECT * FROM NOTAS WHERE id =' + req.params.id) //QUERY
            .then(function(resultados){
            console.log(resultados[0]);
            res.render('detail',{notasid: resultados[0]} ) //Envia datos
            });
            
          
        }
      
}
    
