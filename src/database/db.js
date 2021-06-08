const mongoose = require("mongoose");

function connectMongoDB() {
  // Conectando ao MongoDB
  mongoose.set("useNewUrlParser", true); // configuração obrigatória do MongoDB
  mongoose.set("useUnifiedTopology", true); // configuração obrigatória do MongoDB
  mongoose.set('useFindAndModify', false); // configuração obrigatória para usar método findOneAndUpdate 
  mongoose.connect(
    "mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
  );
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Server connected to MongoDB.");
  });
  db.on("error", console.error.bind(console, "connection error: "));
}

module.exports = { connectMongoDB }