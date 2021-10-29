import React, { useEffect } from "react";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productAction";

const FilteredProductsContainer = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(match.params.name));
  }, []);

  const { products } = useSelector((state) => state.productsReducer);
  const filteredProducts =
    match.path === "/categories/:name"
      ? products.filter(
          (product) => product.categories[0].name === match.params.name
        )
      : products.filter((product) =>
          product.name.toLowerCase().match(match.params.search.toLowerCase())
        );
  console.log("esto es products", products);
  return <Products products={filteredProducts} />;
};
export default FilteredProductsContainer;
