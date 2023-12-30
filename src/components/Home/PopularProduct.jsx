import React from "react";
import homePageImg from "../../assets/homePageImg.png";
import { FaBagShopping } from "react-icons/fa6";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductProp = ({ title, img, price, discount = null, description }) => {
  const toast = useToast();

  return (
    <section className="p-2 w-full min-h-[250px] bg-green-100/[.30] h-fit rounded-lg border-2 border-teal-800 flex flex-col justify-center items-center ">
      <img src={img} alt="" className="h-[150px] w-[150px] object-cover" />
      <div className="flex flex-col gap-2  items-center w-full">
        <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
        <description className=" text-justify line-clamp-2">
          {description}
        </description>
        <div className="flex-col gap-2 flex md:flex-row justify-between w-[80%] items-center flex-wrap ">
          <p className="font-medium text-teal-800">Rs.{price}/kg</p>
          <button
            onClick={() => {
              const examplePromise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(200), 5000);
              });
              toast.promise(examplePromise, {
                success: {
                  title: "Product Added Successfully",
                  description: "Looks great Be Healthy",
                },
                error: {
                  title: "Error try after 5 minutes",
                  description: "Something wrong",
                },
                loading: {
                  title: "Adding Just wait a Minute",
                  description: "Please wait",
                },
              });
            }}
            className="py-2 hover:ring-teal-800 hover:ring-2 transition-all flex items-center gap-2 px-4 w-full md:w-fit justify-center text-white bg-teal-700"
          >
            Add To Cart
            <FaBagShopping />
          </button>
        </div>
      </div>
    </section>
  );
};

export const PopularProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-teal-50 h-fit mt-[5vh] py-8 flex flex-col gap-8">
      <h3 className="text-[25px] text-center font-semibold ">
        Popular Products
      </h3>
      <div className="w-[90%] mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
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
      </div>
      <button
        className="py-2 w-fit mx-auto px-4 border-b-4 border-teal-800"
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>
    </div>
  );
};
