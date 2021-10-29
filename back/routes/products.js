const router = require("express").Router();
const { findAll, findProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productsController");
const { authRole } = require("./admin")
//agregar el authRole
router
  .route("/") //all products
  .get(findAll)
  .post(authRole("admin"), createProduct);

router
  .route("/:id") //individual product
  .get(findProduct)
  .put(authRole("admin"), updateProduct)
  .delete(authRole("admin"), deleteProduct);

module.exports = router;
