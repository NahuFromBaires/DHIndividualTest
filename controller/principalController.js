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
            db.sequelize.query(                
            "INSERT INTO NOTAS (title, mensaje) VALUES('" + req.body.title + "','" + req.body.mensaje + "')")
            //QUERY
            .then(function(){res.redirect('/') //Redirige para recuperar datos de nuevo
            })
     
        },
    BorrarNota: function(req, res, next) 
        {   
  
            let idTabla = parseInt(req.body.borrar);

            db.sequelize.query(              
                "DELETE FROM NOTAS WHERE id = " + idTabla)
                //QUERY
                .then(function(){res.redirect('/') //Redirige para recuperar datos de nuevo
                })
        },
    
    AceptaEdicion: function(req, res, next) 
    {   

        let idTabla = parseInt(req.body.botonEditar);
        
        var date = new Date();
        var dateStr =  date.getFullYear() +  "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) + " " + ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2) + ":" + ("00" + date.getSeconds()).slice(-2);   
          
          
        



        
        console.log(date);

        db.sequelize.query(              
            "UPDATE NOTAS SET title = '" + req.body.title + "', mensaje = '" +  req.body.message + "', updated_at = '" +  dateStr + "' WHERE id = " + idTabla)
            //QUERY
            .then(function(){res.redirect('/') //Redirige para recuperar datos de nuevo
            })


    }


} // Fin module.exports
    
