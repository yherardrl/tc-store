const { Product, Review } = require("../db/models");

const reviewsController = {
  createReview(req, res) {
    Product.findById(req.params.productId)
      .then((product) => {
        Review.create({
          user: req.user._id,
          rating: req.body.rating,
          description: req.body.review,
        }).then((review) => {
          product.reviews.push(review);
          product.save().then(() => {
            Product.findById(req.params.productId)
              .populate({ path: "reviews", populate: { path: "user" } })
              .then((producto) => res.status(201).send(producto));
          });
        });
      })
      .catch((err) => res.status(404).send(err));
  },
};

module.exports = reviewsController;
