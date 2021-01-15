const db = require('../database/db/models');
const path = require('path')

module.exports = 

{
    traeNotas: function(req, res, next) 
        { 
            db.sequelize.query("SELECT * FROM NOTAS") //QUERY
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
        },
    CreaNota: function(req, res, next) 
        {   
            console.log('Toque sobre create');
            db.sequelize.query(                
            "INSERT INTO NOTAS (title, mensaje) VALUES('" + req.body.title + "','" + req.body.mensaje + "')")
            //QUERY
            .then(function(){res.redirect('/') //Redirige para recuperar datos de nuevo
            })
     
        },
    BorrarNota: function(req, res, next) 
        {   
            console.log('Toque sobre borrar nota');
            
            let idTabla = parseInt(req.body.borrar);


            db.sequelize.query(              
                "DELETE FROM NOTAS WHERE id = " + idTabla)
                //QUERY
                .then(function(){res.redirect('/') //Redirige para recuperar datos de nuevo
                })

            
        
        }


} // Fin module.exports
    
