const express = require("express");
//const path = require("path");

//const db = require("./database");
const routes = require("./routes/routes");

const app = express();

// Conectando bando de dados MongoDB
//db.connectMongoDB();


// definindo que o servidor vai receber dados de forms enviados pelo método POST
app.use(express.urlencoded({ extended: true }));

// definindo rotas atendidas pelo servidor
app.use("/api", routes);


// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API restful server running on port ${port}.`));

