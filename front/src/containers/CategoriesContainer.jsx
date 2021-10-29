import React, { useEffect } from "react";
import Categories from "../components/Categories";
import { fetchCategories } from "../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";

const CategoriesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const { categories } = useSelector((state) => state.categoriesReducer);

  return <Categories categories={categories} />;
};

export default CategoriesContainer;
