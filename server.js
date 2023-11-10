import express from "express";
import cors from "cors";
import sql from "mysql2";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT | 5000;

export const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "souravMa1998",
  database: "ecomDB",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  const schemaPath = join(__dirname, 'schema');

  fs.readdir(schemaPath, (err, files) => {
    if (err) {
      console.error('Error reading schema directory: ' + err.message);
      return;
    }

    files.forEach((file) => {
      if (file.endsWith('.sql')) {
        const filePath = join(schemaPath, file);
        const sql = fs.readFileSync(filePath, 'utf-8');

        connection.query(sql, (error, results) => {
          if (error) {
            console.error('Error executing schema: ' + error.message);
          } else {
            console.log(`Schema from ${file} has been executed successfully.`);
          }
        });
      }
    });
  });
});


app.get("/", (req, res) => {
    res.send("Server is running")
})

// routes file
import routes from "./routes/index.js";
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
