### Schema

CREATE DATABASE munch_db;
USE munch_db;

CREATE TABLE food
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	munched BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
