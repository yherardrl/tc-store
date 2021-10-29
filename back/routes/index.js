const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/auth", require("./auth"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart")); //RECORDAR CREAR MIDDLEWARE user logeado PARA CARRRITO DE COMPRA
router.use("/reviews", require("./reviews"));
router.use("/admin", require("./admin").router);
router.use("/categories", require("./categories"));
router.use("/orders", require("./orders"));

module.exports = router;
