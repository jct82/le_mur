DROP DATABASE IF EXISTS omur;

DROP ROLE IF EXISTS omur;

-- Création des roles de notre BDD
CREATE ROLE omur WITH LOGIN ENCRYPTED PASSWORD 'omur';

-- Création de la BDD
CREATE DATABASE omur WITH OWNER omur;