const ProductsModel = require("../models/products");

async function get(req, res) {
  const { id } = req.params;
  const obj = id ? { _id: id } : null;
  const products = await ProductsModel.find(obj);
  res.send(products);
}

async function post(req, res) {
  const { name, brand, price } = req.body;
  const product = new ProductsModel({ name, brand, price });
  const saved = await product.save();
  if (saved) {
    res.send({ message: "Produto salvo com sucesso!"});
  } else {
    res.status(500).send({ message: "Não foi possível salvar o produto"});
  }  
}

module.exports = {
  get,
  post,
};
