const createError = require('http-errors');
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const app = express();

const http = require('http');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/detail', indexRouter);




/*Inicializar puerto de escucha del servidor*/
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en el puerto 3000`);
    console.log(`http://localhost:3000`);
  })


module.exports = app;
