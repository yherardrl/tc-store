import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../components/Main";
import { fetchUser } from "../store/actions/usersAction";
import "../assets/style.scss";

export default ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return <Main history={history} />;
};
