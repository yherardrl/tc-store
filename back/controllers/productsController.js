const { Product } = require("../db/models");

const productsController = {
  findAll(req, res) {
    Product.find()
      .populate("categories")
      .then((productos) => res.send(productos))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  findProduct(req, res) {
    Product.findById(req.params.id)
      .populate({ path: "reviews", populate: { path: "user" } })
      .then((producto) => res.send(producto))
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  createProduct(req, res) {
    Product.create(req.body)
      .then((producto) => res.status(201).send(producto))
      .catch((err) => res.status(404).send(err));
  },
  updateProduct(req, res) {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((product) =>
        res.status(201).send(console.log("product updated", product))
      )
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct(req, res) {
    Product.findOneAndDelete({ _id: req.params.id })
      .then((deletedProduct) =>
        res.send(console.log("product deleted", deletedProduct))
      )
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = productsController;
