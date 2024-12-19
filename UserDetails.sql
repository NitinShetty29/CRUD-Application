CREATE DATABASE user_form_db;

USE user_form_db;



CREATE TABLE user_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    language VARCHAR(50) NOT NULL
);

INSERT INTO user_details (Name, Address, State, District, Date_Of_Birth, Language)
VALUES ('Nitin', '123 Main Street', 'Karnataka', 'Bengaluru', '1990-01-01', 'English');


select * from user_details;

SHOW DATABASES;

SHOW TABLES;

DESCRIBE user_details;