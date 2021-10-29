import React, { useEffect } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productAction";

const ProductContainer = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <Products products={products} />;
};

export default ProductContainer;
