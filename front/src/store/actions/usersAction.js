import axios from "axios";
import { SET_USER, REMOVE_USER, SET_USERS } from "../constants";
import { resetCart } from "./cartAction";

const setUser = (data) => ({ type: SET_USER, payload: data });

const cleanUser = () => ({ type: REMOVE_USER });

const setUsers = (data) => ({ type: SET_USERS, payload: data });

const createUser = (user) =>
  axios.post("/api/users", user).then(({ data }) => console.log(data));

const fetchUsers = () => (dispatch) =>
  axios.get("/api/users").then(({ data }) => dispatch(setUsers(data)));

const loginUser = (user) => (dispatch) =>
  axios.post("/api/auth/login", user).then(({ data }) => {
    dispatch(setUser(data));
  });

const loginUserGoogle = (user) => (dispatch) => {
  axios.get("/api/auth/google", user).then(({ data }) => {
    dispatch(setUser(data));
  });
};

const updateUser = (user) => (dispatch) => {
  axios
    .put("/api/users", user)

    .then(() => dispatch(fetchUsers()));
};

const deleteUser = (user) => {
  axios.delete(`/api/users/${user.email}`);
};

const logoutUser = () => (dispatch) =>
  axios.post("/api/auth/logout").then(() => {
    dispatch(cleanUser());
    dispatch(resetCart());
  });

const fetchUser = () => (dispatch) =>
  axios.get("/api/auth/me").then(({ data }) => {
    dispatch(setUser(data));
    return data;
  });

export {
  fetchUsers,
  loginUser,
  logoutUser,
  createUser,
  fetchUser,
  loginUserGoogle,
  deleteUser,
  updateUser,
  setUser,
};
