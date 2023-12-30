import React from "react";
import homePageImg from "../../assets/homePageImg.png";
import { FaBagShopping } from "react-icons/fa6";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ProductProp } from "../ProductProp";
import { ProductOuterLayerProp } from "../ProductOuterLayerProp";

export const PopularProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-teal-50 h-fit mt-[5vh] py-8 flex flex-col gap-8">
      <h3 className="text-[25px] text-center font-semibold ">
        Popular Products
      </h3>
      <ProductOuterLayerProp>
        <ProductProp
          title="Beans"
          img={homePageImg}
          price={30}
          discount={5}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laborum odit voluptatum excepturi quod!"
          }
        />
        <ProductProp
          title="Beans"
          img={homePageImg}
          price={30}
          discount={5}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laborum odit voluptatum excepturi quod!"
          }
        />
        <ProductProp
          title="Beans"
          img={homePageImg}
          price={30}
          discount={5}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laborum odit voluptatum excepturi quod!"
          }
        />
        <ProductProp
          title="Beans"
          img={homePageImg}
          price={30}
          discount={5}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laborum odit voluptatum excepturi quod!"
          }
        />
        <ProductProp
          title="Beans"
          img={homePageImg}
          price={30}
          discount={5}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam laborum odit voluptatum excepturi quod!"
          }
        />
      </ProductOuterLayerProp>
      <button
        className="py-2 w-fit mx-auto px-4 border-b-4 border-teal-800"
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>
    </div>
  );
};
