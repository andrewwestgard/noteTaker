CREATE DATABASE notes_db;
USE notes_db;

CREATE TABLE notes (
	id INTEGER AUTO_INCREMENT,
    noteTitle VARCHAR (200),
    noteBody VARCHAR (500),
    PRIMARY KEY(id)
);
