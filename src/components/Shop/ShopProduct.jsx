import React from "react";
import { ProductOuterLayerProp } from "../ProductOuterLayerProp";
import { ProductProp } from "../ProductProp";
import homePageImg from "../../assets/homePageImg.png";
import { Center, Divider } from "@chakra-ui/react";
export const ShopProduct = () => {
  const herbs = [
    "Neem",
    "Tulsi",
    "Karpooravalli",
    "Aloe Vera",
    "Adathoda",
    "Brahmi",
    "Gotu Kola",
    "Mint",
    "Ashwagandha",
    "Ginger",
    "Turmeric",
  ];
  return (
    <div className="py-8 w-full">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <h1 className="text-xl uppercase md:text-2xl font-bold text-center text-teal-800">
          Products
        </h1>
        <section className="h-fit w-full">
          <Center className="flex flex-wrap h-fit justify-start">
            {herbs.map((herb, index) => (
              <React.Fragment key={index}>
                <p className="cursor-pointer">{herb}</p>
                {index !== herbs.length - 1 && (
                  <Divider
                    orientation="vertical"
                    borderColor="gray.300"
                    height="10"
                    mx="2"
                    
                  />
                )}
              </React.Fragment>
            ))}
          </Center>
        </section>
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
      </div>
    </div>
  );
};
