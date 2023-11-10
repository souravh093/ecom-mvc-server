CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(10) NOT NULL,
    imageUrl VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL
)