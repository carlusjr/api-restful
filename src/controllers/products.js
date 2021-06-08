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
    res.send({ message: "Produto salvo com sucesso!" });
  } else {
    res.status(500).send({ message: "Não foi possível salvar o produto" });
  }
}

async function put(req, res) {
  const { id } = req.params;

  // O parâmetro new: true retorna o produto já alterado
  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true });

  /* Outra forma de fazer update no registro
  const product = await ProductsModel.findById(id);
  const updated = await product.updateOne(req.body); 
  */
  if (product) {
    res.send({ message: "Produto atualizado com sucesso!", product });
  } else {
    res.status(500).send({ message: "Não foi possível atualizar o produto" });
  }
}

module.exports = {
  get,
  post,
  put,
};
