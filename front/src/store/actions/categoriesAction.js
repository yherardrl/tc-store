import axios from "axios";
import { SET_CATEGORIES, SET_CATEGORY, REMOVE_CATEGORY, NEW_CATEGORY } from "../constants";

const categories = (data) => ({
    type: SET_CATEGORIES,
    payload: data,
});

//objeto que me va a traer la categoria individual
const category = (data) => ({
    type: SET_CATEGORY,
    payload: data,
});

const newCategory = (data) => ({
    type: NEW_CATEGORY,
    payload: data
})

const removeCategory = (data) => ({
    type: REMOVE_CATEGORY,
    payload: data,
})

export const fetchCategories = () => (dispatch) =>
    axios
        .get("/api/categories")
        .then(({ data }) => dispatch(categories(data)));

export const fetchCategory = (id) => (dispatch) =>
    axios
        .get(`/api/categories/${id}`)
        .then(({ data }) => dispatch(category(data)));

export const submitCat = (categoria) => (dispatch) => {
    axios.post("/api/categories", categoria)
        .then(({ data }) => dispatch(newCategory(data)))
}

export const deleteCategory = (id) => (dispatch) => {
    axios.delete(`/api/categories/${id}`)
        .then(() => dispatch(removeCategory(id)))
}




