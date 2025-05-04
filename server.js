import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/routes.js";
import connectDB from "./database/db.js";

// Conectar ao banco de dados MongoDB
connectDB();

// Para simular __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware para análise de dados do corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar view engine e pasta de views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Usar as rotas definidas no arquivo routes.js
app.use(routes);

// Middleware para tratar erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


