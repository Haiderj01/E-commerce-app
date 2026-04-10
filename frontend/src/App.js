import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

const token = localStorage.getItem("token");

function App() {
  return (
    <CartProvider>
      <BrowserRouter>


<div className="header">
  <h2>My E-Commerce Store</h2>

  {/* ALWAYS */}
  <Link to="/" style={{ margin: "10px" }}>Home</Link>

  {/* SHOW ONLY WHEN LOGGED IN */}
  {token && (
    <>
      <Link to="/cart" style={{ margin: "10px" }}>Cart</Link>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        style={{ marginLeft: "10px", cursor: "pointer" }}
      >
        Logout
      </button>
    </>
  )}

  {/* SHOW ONLY WHEN NOT LOGGED IN */}
  {!token && (
    <>
      <Link to="/login" style={{ margin: "10px" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px" }}>Register</Link>
    </>
  )}
</div>

        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={token ? <ProductList /> : <Login />}
            />
          </Routes>
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;