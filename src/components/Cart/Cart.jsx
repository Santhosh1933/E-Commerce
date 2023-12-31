import React from "react";
import { NavBar } from "../NavBar";
import { CartProductLayout } from "./CartProductLayout";
import { CartProductProp } from "./CartProductProp";
import homeImg from "../../assets/homePageImg.png";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();

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
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold text-green-800 py-2 ">
              Order Summary :{" "}
            </p>
            <hr />
            <div className="flex justify-between items-center ">
              <p className="text-gray-500 font-medium">Sub total</p>
              <p className="font-medium">Rs.3000</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-gray-500 font-medium">Delivery Charge</p>
              <p className="font-medium">Rs.50</p>
            </div>
            <hr />
            <div className="flex justify-between items-center ">
              <p className="text-lg font-semibold ">Total</p>
              <p className="text-lg font-semibold ">Rs.3050</p>
            </div>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="py-3 bg-slate-800 text-white rounded-md shadow-lg"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
