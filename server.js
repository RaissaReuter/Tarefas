import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Para simular __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Rota
app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

