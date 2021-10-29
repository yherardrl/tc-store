const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.String,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
    require: true,
  },
  state: {
    type: String,
    enum: ["Confirmado", "En Camino", "Entregado", "Devuelto"],
    default: "Confirmado",
  },
  products: [
    {
      type: Schema.Types.String,
      ref: "productOrder",
    },
  ],
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
