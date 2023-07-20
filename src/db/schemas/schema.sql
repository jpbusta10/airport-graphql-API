DROP DATABASE IF EXISTS airportDB;
CREATE DATABASE airportDB;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user"{
    user_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    hashed_pass VARCHAR(255) NOT NULL
};

CREATE TABLE airport{
    airport_code VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
    airport_country VARCHAR(255) NOT NULL,
    gps_code VARCHAR(255) NOT NULL
};

CREATE TABLE passenger{
    passenger_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    passenger_name VARCHAR(255),
    passenger_last_name VARCHAR(255),
    email VARCHAR (255),
    country_of_bith VARCHAR(255) NOT NULL
};
CREATE TABLE trip{
    trip_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    airport_1 VARCHAR(255) NOT NULL,
    airport_2 VARCHAR(255) NOT NULL,
    trip_date TIMESTAMP,
    CONSTRAINT fk_airport_1 VARCHAR(255) REFERENCES airport (airport_code) ON DELETE CASCADE,
    CONSTRAINT fk_airport_2 VARCHAR(255) REFERENCES airport (airport_code) ON DELETE CASCADE
}