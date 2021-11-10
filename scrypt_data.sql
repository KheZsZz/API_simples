create database ecobus_database;
use ecobus_database;

create table drives(
	id int not null auto_increment primary key, 
	nome varchar(100)
);

insert into drives (nome) values
("Kevin Oliveira"),
("Giuliana Alcinio"),
("Isabella Oliveira");

select * from drives;

delete from drives where id = 4;

update drives set nome = ? where id =?