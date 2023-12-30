import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar";
import homePageImg from "../../assets/homePageImg.png";
import {
  Highlight,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
import { ProductOuterLayerProp } from "../ProductOuterLayerProp";
import { ProductProp } from "../ProductProp";
import { Footer } from "../Footer";

export const Product = () => {
  const param = atob(useParams()?.productId);
  const toast = useToast();

  const [productCount, setProductCount] = useState(1);
  const [activeImage, setActiveImage] = useState(homePageImg);
  return (
    <div>
      <NavBar />
      <section className="w-full py-8">
        <div className="w-[95%] mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full flex flex-col gap-4">
            <img
              src={activeImage}
              alt=""
              className="w-full md:h-[75vh] h-[50vh] object-cover rounded-lg"
            />
            <div className="w-full flex justify-center">
              <div className=" flex overflow-scroll rm-scroll gap-4">
                <img
                  onClick={() => setActiveImage(homePageImg)}
                  src={homePageImg}
                  alt=""
                  className="h-[100px] w-[100px] cursor-pointer bg-slate-100 rounded-md object-cover"
                />
                <img
                  src={homePageImg}
                  alt=""
                  className="h-[100px] w-[100px] cursor-pointer bg-slate-100 rounded-md object-cover"
                />
                <img
                  src={homePageImg}
                  alt=""
                  className="h-[100px] w-[100px] cursor-pointer bg-slate-100 rounded-md object-cover"
                />
                <img
                  src={homePageImg}
                  alt=""
                  className="h-[100px] w-[100px] cursor-pointer bg-slate-100 rounded-md object-cover"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-4">
              <p className="text-2xl uppercase  font-medium text-green-900">
                Product Name
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                sequi!
              </p>
              <div className="flex items-center justify-between  flex-col-reverse md:justify-start md:flex-row gap-8 py-4">
                <button
                  onClick={() => {
                    const examplePromise = new Promise((resolve, reject) => {
                      setTimeout(() => resolve(200), 1000);
                    });
                    toast.promise(examplePromise, {
                      success: {
                        title: `${productCount} Product Added Successfully`,
                        description: "Looks great Be Healthy",
                        isClosable: true,
                        duration: 1000,
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
                  className="py-2 rounded-md hover:ring-teal-800 md:w-fit  w-full hover:ring-2 transition-all flex items-center gap-2 px-4  justify-center text-white bg-teal-700"
                >
                  Add To Cart
                  <FaBagShopping />
                </button>
                <div className="border-2 flex w-full md:w-fit border-slate-700 border-collapse">
                  <button
                    onClick={() =>
                      setProductCount(
                        productCount == 1 ? productCount : productCount - 1
                      )
                    }
                    className="w-full md:min-w-[30px] focus:bg-red-400 border-x-2  outline-none border-slate-700 min-h-[30px] py-2 px-4  rounded-none"
                  >
                    -
                  </button>
                  <button className="w-full md:min-w-[30px] border-x-2  outline-none border-slate-700 min-h-[30px] py-2 px-4  rounded-none">
                    {productCount}
                  </button>
                  <button
                    onClick={() => setProductCount(productCount + 1)}
                    className="w-full md:min-w-[30px] border-x-2 focus:bg-green-400 outline-none border-slate-700 min-h-[30px] py-2 px-4  rounded-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-medium text-green-700 text-lg">Rs.30/kg </p>
              <Text className="leading-7">
                <Highlight
                  query={["Architecto", "recusandae", "aliquam"]}
                  styles={{
                    px: "2",
                    py: "1",
                    bg: "teal.100",
                    rounded: "md",
                    whiteSpace: "nowrap",
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, ipsa id sed animi et voluptas incidunt perspiciatis,
                  accusamus fugit, beatae atque sit doloribus sequi. Aperiam,
                  omnis laboriosam. Architecto ad dolores voluptate laudantium
                  facere dicta porro, dolor inventore repudiandae aperiam
                  similique earum commodi quia nesciunt perspiciatis natus
                  libero? Optio tempore tenetur repellat non ea aliquam neque
                  delectus amet nesciunt unde, aut sunt dolore cumque iusto
                  ipsum voluptatum officia. Voluptate neque quibusdam dolores
                  suscipit fuga reprehenderit consectetur, recusandae, cumque
                  quidem ratione assumenda deleniti non. Vel nam mollitia, unde
                  qui fuga obcaecati repellat officia voluptatibus facilis
                  officiis, nostrum quos consequuntur minus. Eius, voluptatibus!
                </Highlight>
              </Text>
              <div>
                <p className="font-semibold">Product Details :</p>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-8">
          <p className="text-2xl font-semibold mx-auto w-[95%]">
            Similar Products :
          </p>
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
      </section>
      <Footer />
    </div>
  );
};
