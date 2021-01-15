CREATE DATABASE  IF NOT EXISTS control_de_peso;

USE control_de_peso;

DROP TABLE PESAJES ;
CREATE TABLE PESAJES(
fecha datetime NOT NULL,
peso decimal (4,2) NOT NULL,
quien_eres varchar(10) NOT NULL,
id  int (4) auto_increment PRIMARY KEY
);

INSERT INTO PESAJES (fecha, peso, quien_eres) VALUES('20210111',84.3,'Nahuel');

SELECT * from PESAJES;

