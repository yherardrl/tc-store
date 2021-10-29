import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shoppinghistory from "../components/Shoppinghistory";
import { fetchUserOrders } from "../store/actions/ordersAction";

const ShoppingHistoryContainer = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.ordersReducer);

  useEffect(() => dispatch(fetchUserOrders()), []);

  return <Shoppinghistory orders={orders} />;
};

export default ShoppingHistoryContainer;
