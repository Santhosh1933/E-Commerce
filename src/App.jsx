import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Shop />} path="/shop" />
      </Routes>
    </BrowserRouter>
  );
}
