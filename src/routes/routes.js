const router = require("express").Router();

router.get("/clientes", (req, res) => {
  res.send({ message: "Ok"});
})

module.exports = router;