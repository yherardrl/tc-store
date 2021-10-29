import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/usersAction";
import useInput from "../hooks/useInput";

const NavbarContainer = ({ history }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const logout = () => {
    dispatch(logoutUser()).then(() => history.push("/"));
  };



  const { singleUser } = useSelector((state) => state.usersReducer);

  const { handleChange, inputs, setInputs } = useInput();

  const handleNavSearch = () => {
    setInputs({ ...inputs, search: "" })
  }

  return (
    <Navbar
      userlog={singleUser}
      logout={logout}
      handleChange={handleChange}
      filterValue={inputs.search}
      handleShow={handleShow}
      handleClose={handleClose}
      show={show}
      handleNavSearch={handleNavSearch}
    />
  );
};

export default NavbarContainer;
