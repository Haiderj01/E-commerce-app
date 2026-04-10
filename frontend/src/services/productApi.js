import axios from "axios";

const PRODUCT_API = axios.create({
  baseURL: "https://dummyjson.com"
});

export const getProducts = () => PRODUCT_API.get("/products");
export const getProduct = (id) => PRODUCT_API.get(`/products/${id}`);