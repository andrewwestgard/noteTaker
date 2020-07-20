CREATE DATABASE notes_db;
USE notes_db;

CREATE TABLE notes (
	id INTEGER AUTO_INCREMENT,
    noteTItle VARCHAR (200),
    noteBody VARCHAR (500),
    PRIMARY KEY(id)
);


INSERT INTO notes VALUES (1, 'homework', 'i need to do it');
INSERT INTO notes VALUES (3, 'homework', 'i need to do it');
INSERT INTO notes VALUES (4, 'homework', 'i need to do it');
