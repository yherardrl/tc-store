const router = require("express").Router();
const {
  findCategories,
  createCategories,
  deleteCategories,
} = require("../controllers/categoriesController");
const { authRole } = require("./admin");

router.route("/").get(findCategories).post(authRole("admin"), createCategories);

router.route("/:id").delete(authRole("admin"), deleteCategories);

module.exports = router;
