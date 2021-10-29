import React from "react";
import { FaStar } from "react-icons/fa";

const SingleProduct = ({
  singleProduct,
  addToCart,
  sumProduct,
  restProduct,
  quantity,
  productRatingMagic
}) => {

  return (
    <div>
      <div className="product-container">
        {singleProduct && singleProduct.pictures ? (
          <div className="images">
            <div className="list-images">
              {singleProduct.pictures.map((img) => (img &&
                <div key={img} className="imgContainer">
                  <img src={img} alt="img" />
                </div>
              ))}
            </div>
            <div className="principal-image">
              <img src={singleProduct.pictures[0]} alt="img" />
            </div>
          </div>
        ) : null}

        <div className="data-container">
          <div className="data">
            <h1>{singleProduct.name}</h1>
            <h4>{singleProduct.brand}</h4>
            <h4 className="price"> {singleProduct.price}</h4>
          </div>

          <div style={{ textAlign: "center" }}>
            <br />
            <h4>Product Rating:</h4>
            {singleProduct.reviews && singleProduct.reviews.map(pic => { { productRatingMagic += pic.rating } })}
            <div className="starsContainerSingle" style={{ height: "1px" }}>
              {[...Array(5)].map((star, i) => {
                const ratingVal = i + 1;
                return (
                  <label>
                    <FaStar
                      color={(ratingVal) <= (singleProduct.reviews && (productRatingMagic / singleProduct.reviews.length)) ? "#e7cf34" : "grey"}
                      size={30}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <br />
          <br />

          <div className="order">
            <div className="quantity">
              <button
                className="quantity-btn"
                type="button"
                onClick={restProduct}
              >
                -
              </button>
              <div> {quantity} </div>
              <button
                className="quantity-btn"
                type="button"
                onClick={sumProduct}
              >
                +
              </button>
            </div>
            <button className="add-btn" onClick={() => addToCart()}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div className="descriptionProduct">
        <h1>Description:</h1>
        <p>{singleProduct.description}</p>
      </div>

      <hr />
    </div>
  );
};

export default SingleProduct;
