const router = require("express").Router();
/***
 * Verbos HTTP
 * GET  - obter dados
 * POST - gravar/receber dados
 * PUT  - atualizar dados
 * DELETE - remover dados
 */

const ProductsController = require("../controllers/products");

router.get("/products/:id?", ProductsController.get); // ? na rota indica que o parâmetro é opcional
router.post("/products", ProductsController.post);
//router.get("/products/:id", ProductsController.put);
//router.get("/products/:id", ProductsController.delete);

module.exports = router;