import { connection } from "../server.js";

export const createUser = (req, res) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = req.body;

  const sql =
    "INSERT INTO products (title, description, price, discountPercentage, rating, stock, brand, category, thumbnail) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting the product");
      } else {
        res.send(results);
      }
    }
  );
};

// get all data
export const fetchAllData = (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching the products");
    } else {
      res.send(result);
    }
  });
};

// single data fetching
export const fetchSingleData = (req, res) => {
  const sql = "SELECT * FROM products WHERE id = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching single product");
    } else {
      res.send(result);
    }
  });
};

// update data in table
export const updateData = (req, res) => {
  const { title, price } = req.body;
  const sql = "UPDATE products SET title = ?, price = ? WHERE id = ?";
  connection.query(sql, [title, price, req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updated product");
    } else {
      res.json({
        status: "Product updated",
        data: result,
      });
    }
  });
};

// delete data for the table
export const deleteData = (req, res) => {
  const sql = "DELETE FROM products WHERE id = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting the product");
    }
    {
      res.json({
        status: "Product Delete",
        data: result,
      });
    }
  });
};
