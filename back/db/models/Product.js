const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  categories: [
    {
      type: Schema.Types.String,
      ref: "category",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    },
  ],
  pictures: [
    {
      type: Schema.Types.String,
    },
  ],
  description: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
