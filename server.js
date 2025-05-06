import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./database/db.js";
import routes from "./routes/routes.js";
import session from "express-session";
import flash from "express-flash";

// Inicializa app e configura porta
const app = express();
const port = process.env.PORT || 3000;

// Configuração do __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conexão com o banco de dados
await connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "seuSegredo", 
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.use(routes);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { error: err.message });
});

// Inicia servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
