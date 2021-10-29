import React, { useEffect, useState } from "react";
import Admin from "../components/Admin";
import {
  fetchUsers,
  updateUser,
  deleteUser,
} from "../store/actions/usersAction";
import {
  fetchProducts,
  updateProduct,
  fetchSingleProduct,
  deleteProduct,
  createProduct,
} from "../store/actions/productAction";
import { fetchOrders, updateOrder } from "../store/actions/ordersAction";
import {
  submitCat,
  fetchCategories,
  deleteCategory,
} from "../store/actions/categoriesAction";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  const { users, singleUser } = useSelector((state) => state.usersReducer);
  const { products, singleProduct } = useSelector(
    (state) => state.productsReducer
  );
  const { orders, singleOrder } = useSelector((state) => state.ordersReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);

  const [options, setOptions] = useState("");

  const { handleChange, inputs, setInputs } = useInput();

  //USERS
  function handleUpdateUser(e, val) {
    e.preventDefault();
    dispatch(updateUser({ email: inputs.email, accessLevel: val }));
  }

  function handleUserDelete(e) {
    e.preventDefault();
    dispatch(deleteUser({ email: inputs.email }));
  }
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
    dispatch(fetchOrders());
    dispatch(fetchCategories());
  }, []);

  //PRODUCTOS
  function setProduct(e) {
    e.preventDefault();
    dispatch(updateProduct(singleProduct));
  }

  function setSingleProduct(e, options) {
    e.preventDefault();
    dispatch(fetchSingleProduct(options));
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(singleProduct));
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name: e.target[0].value,
        brand: e.target[1].value,
        categories: e.target[2].value,
        price: e.target[3].value,
        pictures: [
          e.target[4].value,
          e.target[5].value,
          e.target[6].value,
          e.target[7].value,
        ],
        description: e.target[8].value,
      })
    );
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        name: e.target[0].value,
        brand: e.target[1].value,
        categories: [options],
        price: e.target[3].value,
        pictures: [
          e.target[4].value,
          e.target[5].value,
          e.target[6].value,
          e.target[7].value,
        ],
        description: e.target[8].value,
        _id: e.target[9].value,
      })
    );
  };

  //CATEGORIES
  const handleOptions = (e) => {
    const value = e.target.value;
    setOptions(value);
  };

  const handleSubmitCat = (e) => {
    e.preventDefault();
    const category = {
      name: inputs.name,
      image: inputs.image,
    };
    dispatch(submitCat(category));
    setInputs({ ...inputs, name: "", image: "" });
  };
  const handleDeleteCat = (e) => {
    e.preventDefault();
    dispatch(deleteCategory(options));
    setOptions("");
  };

  //ORDERS
  const handleSubmitOrder = (e, val) => {
    e.preventDefault();
    dispatch(
      updateOrder({
        _id: singleOrder._id,
        state: val,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
    dispatch(fetchOrders());
    dispatch(fetchCategories());
  }, []);

  return (
    <Admin
      singleUser={singleUser}
      orders={orders}
      users={users}
      handleOptions={handleOptions}
      categories={categories}
      handleDeleteCat={handleDeleteCat}
      handleChange={handleChange}
      handleSubmitCat={handleSubmitCat}
      filterValue={inputs}
      products={products}
      setProduct={setProduct}
      singleProduct={singleProduct}
      singleOrder={singleOrder}
      setSingleProduct={setSingleProduct}
      handleDeleteProduct={handleDeleteProduct}
      handleSubmitUpdate={handleSubmitUpdate}
      handleSubmitCreate={handleSubmitCreate}
      handleUpdateUser={handleUpdateUser}
      handleUserDelete={handleUserDelete}
      handleSubmitOrder={handleSubmitOrder}
    />
  );
};
