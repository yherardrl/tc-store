const { Order, User, ProductOrder } = require("../db/models");
const EmailCtrl = require("./mailController");

const orderController = {
  findAll(req, res) {
    Order.find()
      .populate({ path: "products", populate: { path: "product" } })
      .populate({ path: "user", select: ["name", "email"] })
      .then((orders) => res.send(orders))
      .catch((err) => res.status(500).send(err));
  },
  findOrder(req, res) {
    Order.findById(req.params.id)
      .then((order) => res.send(order))
      .catch((err) => res.status(404).send(err));
  },
  findUserOrders(req, res) {
    User.findById(req.user._id)
      .populate({
        path: "orders",
        populate: { path: "products", populate: { path: "product" } },
      })
      .then((user) => res.status(200).send(user.orders))
      .catch((err) => res.status(404).send(err));
  },
  updateOrder(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body)
      .then((order) => res.status(201).send(order))
      .catch((err) => res.status(500).send(err));
  },
  createOrder(req, res) {
    User.findById(req.user._id).then((user) => {
      Order.create({}).then((order) => {
        const products = req.body.map((OP) =>
          ProductOrder.create({
            product: OP.product,
            quantity: OP.quantity,
          })
        );
        Promise.all(products).then((productsResuelto) => {
          productsResuelto.map((OP) => order.products.push(OP));
          order.user = user._id;
          order.save();
          user.orders.push(order);
          user.save();
          EmailCtrl.sendEmail(req, res);
          User.findById(req.user._id)
            .populate({
              path: "orders",
              populate: { path: "products", populate: { path: "product" } },
            })
            .populate({
              path: "orders",
              populate: { path: "user", select: ["name", "email"] },
            })
            .then((user) => res.status(201).send(user.orders));
        });
      });
    });
  },
};

module.exports = orderController;
