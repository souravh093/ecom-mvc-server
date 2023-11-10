import express from "express";
import cors from "cors";
import sql from "mysql2";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { error } from "console";

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
    console.error("Error connecting" + err.stack);
    return;
  }

  console.log("Connect as thread id " + connection.threadId);

  const schemaPath = join(__dirname, "schema.sql");
  fs.readFile(schemaPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading schema file " + err.message);
      return
    }

    connection.query(data, (error, results) => {
        if(error) {
            console.error("Error executing schema: " + error.message);
            return;
        }

        console.log('Database schema has been set UP!')
    })
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
