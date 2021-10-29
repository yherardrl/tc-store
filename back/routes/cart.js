const router = require("express").Router();
const {
  addProduct,
  deleteProduct,
  getCart,
  setCart,
  resetCart,
} = require("../controllers/cartController");

router.route("/").get(getCart).post(setCart).put(resetCart);
router.route("/add").post(addProduct);
router.route("/delete/:id").delete(deleteProduct);

module.exports = router;
