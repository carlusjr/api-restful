const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  brand: String,
  price: Number
})

const Model = mongoose.model("products", schema);

module.exports = Model;