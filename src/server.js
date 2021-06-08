const express = require("express");
//const path = require("path");

const db = require("./database/db");
const routes = require("./routes/routes");

const app = express();

// Habilita servidor para receber JSON
app.use(express.json());

// Conectando bando de dados MongoDB
db.connectMongoDB();


// definindo rotas atendidas pelo servidor
app.use("/api", routes);


// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API restful server running on port ${port}.`));

