import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Navbar, Dropdown } from "react-bootstrap";
import LoginContainer from "../containers/LoginContainer";

export default ({
  userlog,
  logout,
  handleChange,
  filterValue,
  handleClose,
  handleShow,
  show,
  handleNavSearch
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/" className="brand">
        <img style={{ width: "116%" }} src="/tcmusic.png" alt="TC-Store" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="search_wrap search_wrap_3">
          <div className="search_box">
            <input type="text" onChange={handleChange} value={filterValue} name="search"
              className="input"
              placeholder="Search..."
            />
            <Link to={`/${filterValue}`} onClick={handleNavSearch}>
              {" "}
              <div className="btn btn_common">
                <img src="lupita1.png" className="lupitapng" />
              </div>
            </Link>
          </div>
        </div>
        {userlog && userlog.name ? (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <Link
                  to=""
                  variant="outline"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    margin: " 0 5px",
                  }}
                >
                  {" "}
                  {userlog.name} <img src="usericon.png" className="navicon" />{" "}
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  backgroundColor: "#343a40",
                  margin: "-8px 48px",
                  padding: "0 4px",
                }}
              >
                <Dropdown.Item className="dropdownbutton">
                  <Link to="/shoppinghistory" className="divsDropNav">
                    <div className="dropdown-item">Shopping</div>
                  </Link>
                </Dropdown.Item>
                {userlog.accessLevel === "admin" ? (
                  <Dropdown.Item className="dropdownbutton">
                    <Link bg="lg" to="/admin" className="divsDropNav">
                      <div className="dropdown-item">Admin</div>
                    </Link>
                  </Dropdown.Item>
                ) : null}

                <Dropdown.Item className="dropdownbutton" onClick={logout}>
                  <div className="dropdown-item">Log Out</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
            <>
              <Button
                variant="outline-sucess"
                className="buttonSignIn"
                onClick={handleShow}
              >
                Sign In
            </Button>
              <Modal show={show} onHide={handleClose}>
                {<LoginContainer handleClose={handleClose} />}
              </Modal>
            </>
          )}
        <Link to="/cart">
          <Button variant="outline-sucess" className="cartButton">
            <img src="cart2.png" className="cart" />
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
