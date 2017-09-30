CREATE DATABASE filmsearch_db;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(900),
  year INTEGER,
  rating VARCHAR(20),
  plot VARCHAR(2000),
  poster VARCHAR(200)
);

ALTER TABLE movies ADD COLUMN imdbid VARCHAR(200);
