import React from "react";
import { NavBar } from "../NavBar";
import { CartProductLayout } from "./CartProductLayout";
import { CartProductProp } from "./CartProductProp";
import homeImg from "../../assets/homePageImg.png";

export const Cart = () => {
  return (
    <div>
      <NavBar />
      <section className="grid grid-cols-1 md:grid-cols-3 w-[95%] mx-auto">
        <CartProductLayout>
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
          <CartProductProp
            title="Title"
            quantity={1}
            price={30}
            img={homeImg}
            discount={0}
          />
        </CartProductLayout>
        <div>
          
        </div>
      </section>
    </div>
  );
};
