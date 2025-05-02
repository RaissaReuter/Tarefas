import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/routes.js";

// Para simular __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configure view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Add this line
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Add this before app.listen()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
