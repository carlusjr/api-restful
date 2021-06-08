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
router.put("/products/:id", ProductsController.put);
router.delete("/products/:id", ProductsController.del);

module.exports = router;