DROP DATABASE IF EXISTS airportDB;
CREATE DATABASE airportDB;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
    user_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    hashed_pass VARCHAR(255) NOT NULL
);

CREATE TABLE airport (
    airport_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    airport_code VARCHAR(255) NOT NULL,
    airport_country VARCHAR(255) NOT NULL,
    gps_code VARCHAR(255) 
);

CREATE TABLE passenger (
    passenger_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    passenger_name VARCHAR(255),
    passenger_last_name VARCHAR(255),
    email VARCHAR(255),
    country_of_birth VARCHAR(255) NOT NULL
);

CREATE TABLE airplane (
    plane_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    plane_manufacturer VARCHAR(255) NOT NULL,
    plane_model VARCHAR(255) NOT NULL,
    plane_year TIMESTAMP NOT NULL,
    plane_seats INTEGER NOT NULL
);

CREATE TABLE trip (
    trip_uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY UNIQUE NOT NULL,
    airport_1 UUID NOT NULL,
    airport_2 UUID NOT NULL,
    plane UUID NOT NULL,
    trip_date TIMESTAMP,
    CONSTRAINT fk_airport_1 FOREIGN KEY (airport_1) REFERENCES airport (airport_id) ON DELETE CASCADE,
    CONSTRAINT fk_airport_2 FOREIGN KEY (airport_2) REFERENCES airport (airport_id) ON DELETE CASCADE,
    CONSTRAINT fk_plane FOREIGN KEY (plane) REFERENCES airplane (plane_id) ON DELETE CASCADE
);
