drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers
(
  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
)