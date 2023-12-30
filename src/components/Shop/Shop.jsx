import React from "react";
import { NavBar } from "../NavBar";
import { ShopProduct } from "./ShopProduct";
import { Footer } from "../Footer";
export const Shop = () => {
  return (
    <div>
      <NavBar />
      <ShopProduct />
      <Footer />
    </div>
  );
};
