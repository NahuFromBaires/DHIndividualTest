const db = require('../database/db/models');
const path = require('path')

module.exports = 

{
    traeNotas: function(req, res, next) 
        { 
            db.sequelize.query('SELECT * FROM NOTAS')
            .then(function(resultados){
            res.render( 'index',{notas: resultados[0]} ) 
            });
         },
    
    Edita: function(req, res, next) 
        {
            console.log('Estoy en detail');
            res.render( path.join(__dirname, '../views/detail') )
          
        }
      
}
    
