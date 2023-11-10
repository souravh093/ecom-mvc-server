CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    discountPercentage DECIMAL(10, 2),
    rating DECIMAL(10, 2),
    stock INT(3),
    brand VARCHAR(20),
    category VARCHAR(20),
    thumbnail VARCHAR(100)
) 


