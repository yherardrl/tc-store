const { User, ProductOrder } = require("../db/models");

const cartController = {
  getCart(req, res) {
    User.findById(req.user._id)
      .populate({ path: "cart", populate: { path: "product" } })
      .then((user) => res.status(200).send(user.cart))
      .catch((err) => res.status(500).send(err));
  },
  setCart(req, res) {
    User.findById(req.user._id).then((user) => {
      const newCart = req.body.map((order) => ProductOrder.create(order));
      Promise.all(newCart).then((cart) => {
        user.cart = cart;
        user.save().then(() => {
          User.findById(req.user._id)
            .populate({ path: "cart", populate: { path: "product" } })
            .then((user) => res.status(201).send(user.cart));
        });
      });
    });
  },
  resetCart(req, res) {
    User.findById(req.user._id)
      .then((user) => {
        const cart = user.cart.map((order) =>
          ProductOrder.deleteOne({ _id: order._id })
        );
        Promise.all(cart).then((emptyCart) => {
          user.save();
          res.status(200).send(emptyCart);
        });
      })
      .catch((err) => res.status(500).send(err));
  },
  addProduct(req, res) {
    User.findById(req.user._id)
      .populate({ path: "cart", populate: { path: "product" } })
      .then((user) => {
        let exist = false;

        user.cart.map((order) => {
          if (
            order.product._id.toString() === req.body.product._id.toString()
          ) {
            order.quantity = req.body.quantity;
            exist = true;
            order.save();
            return res.status(201).send(user.cart);
          }
        });

        if (!exist) {
          ProductOrder.create({
            product: req.body.product,
            quantity: req.body.quantity,
          }).then((order) => {
            user.cart.push(order);
            user.save();
            res.status(201).send(user.cart);
          });
        }
      })
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct(req, res) {
    User.findById(req.user._id)
      .populate({ path: "cart", populate: { path: "product" } })
      .then((user) => {
        user.cart.map((order, index) => {
          if (order.product._id.toString() === req.params.id) {
            ProductOrder.deleteOne({ _id: order._id });
            user.cart.splice(index, 1);
            user.save();
            res.status(201).send(user.cart);
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = cartController;
