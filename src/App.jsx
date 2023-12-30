import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Product } from "./components/Shop/Product";
import { PageNotFound } from "./components/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Product />} path="/shop/:productId" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
