CREATE DATABASE basededatos;

\l

\c basededatos;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('arland', 'arlandmvillegas@gmail.com'),
    ('ivar', 'imichelena@ipingenieria.net');

select * from users;
