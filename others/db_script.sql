CREATE TABLE compounds(
	id INT,
	name VARCHAR(250) NOT NULL,
    image VARCHAR(250),
    description TEXT,
    PRIMARY KEY (id)
);

show tables;

use chemically;

-- local-infile = 1;

SET GLOBAL local_infile = ON;

LOAD DATA LOCAL INFILE 'E:/Dev/Chemically/others/compound  (1) (2).csv'
INTO TABLE compounds
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, name, description, image, @skip1, @skip2);

SELECT * FROM compounds;

TRUNCATE compounds;