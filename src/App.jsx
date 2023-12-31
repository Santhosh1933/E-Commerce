import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Product } from "./components/Shop/Product";
import { PageNotFound } from "./components/PageNotFound";
import { Cart } from "./components/Cart/Cart";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Product />} path="/shop/:productId" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<CheckOut />} path="/checkout" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
