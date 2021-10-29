import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import LoginContainer from "../containers/LoginContainer";

const Cart = ({
  cart,
  deleteProduct,
  resetCart,
  user,
  handleClose,
  show,
  createOrder,
  buy,
}) => {
  return (
    <div>
      <h4 className="title">Shopping Cart</h4>
      <div className="buttons">
        <button onClick={resetCart} className="resetCart">
          Reset
        </button>
        <button onClick={createOrder} className="buybutton">
          Buy
        </button>
      </div>
      <div className="shopping-cart">
        {cart.length > 0
          ? cart.map((order) => (
              <div className="item" key={order._id || order.product._id}>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(order.product)}
                >
                  X
                </button>

                {order.product ? (
                  <>
                    <Link
                      to={`/products/${order.product._id}`}
                      className="image"
                    >
                      {order.product.pictures ? (
                        <img
                          src={order.product.pictures[0]}
                          alt="Imagen del producto"
                        />
                      ) : null}
                    </Link>

                    <div className="description">
                      <span className="name">{order.product.name}</span>
                      <span className="brand">{order.product.brand}</span>
                    </div>

                    <div className="quantity">Cantidad: {order.quantity}</div>

                    <div className="total-price">
                      {order.product.price * order.quantity}
                    </div>
                  </>
                ) : null}
              </div>
            ))
          : null}
        {user && user.name ? (
          buy ? (
            <Modal show={show} onHide={handleClose}>
              <div className="confirmPurchase">
                <h1>Thanks for your purchase {user.name}!!</h1>
                <p>
                  Check your email. Soon you will receive the confirmation of
                  the purchase made.
                </p>
              </div>
            </Modal>
          ) : null
        ) : (
          <Modal show={show} onHide={handleClose}>
            {<LoginContainer handleClose={handleClose} />}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Cart;
