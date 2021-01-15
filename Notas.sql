DROP DATABASE IF exists DH_Notas_Nahuel_Rodriguez;
CREATE DATABASE DH_Notas_Nahuel_Rodriguez;

USE DH_Notas_Nahuel_Rodriguez;

DROP TABLE IF EXISTS NOTAS;

CREATE TABLE NOTAS (
	id int auto_increment primary key,
    title varchar(50) NULL,
    mensaje varchar(8000) NULL,
    created_at datetime default CURRENT_TIMESTAMP,
    updated_at datetime NULL
    );
    
INSERT INTO NOTAS (title, mensaje,created_at)
VALUES ('Mi homero','Mi Homero no es comunista, podrá ser mentiroso, puerco, idiota, comunista, pero nunca una estrella de porno.','2021-01-14 22:04:00'),
('Rockear for ever','Yo estaba en onda, pero luego cambiaron la onda. Ahora la onda que traigo no es onda, y la onda de onda me parece muy mala onda. ¡Y te va a pasar a ti!.','2021-01-14 22:05:08'),
('Como un reactor','Saben, hijos, un reactor nuclear es como una mujer. Sólo tienes que leer el manual y apretar los botones adecuados','2021-01-14 22:07:51');

