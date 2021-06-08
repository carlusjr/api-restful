const express = require("express");

// Dependência para configuração de domínios que podem acessar as APIs deste servidor
const cors = require("cors");

const db = require("./database/db");
const routes = require("./routes/routes");

const app = express();

// Habilita servidor para receber JSON
app.use(express.json());

// Conectando bando de dados MongoDB
db.connectMongoDB();

// habilita CORS
// Para todos os domínios = app.use(cors());
// Para apenas um domínio = app.use(cors({ origin: "http://127.0.0.1:5500" }));
// Para mais de um endereço

const allowedOrigins = ["http://127.0.0.1:5500", "https://www.frontend.com.br"];
app.use(
  cors({
    origin: function(origin, callback) {      
      const allowed = !origin ? true : allowedOrigins.includes(origin);      
      callback(null, allowed); // primeiro parâmetro é uma mensagem, quando null retorna mensagem padrão
    },
  })
);

// definindo rotas atendidas pelo servidor
app.use("/api", routes);

// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`API restful server running on port ${port}.`)
);
