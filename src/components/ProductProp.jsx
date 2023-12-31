import { Button, useToast } from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export const ProductProp = ({
  title,
  img,
  price,
  discount = null,
  description,
  productPage = null,
}) => {
  const toast = useToast();

  const EncodeProductId = (pid) => {
    return btoa(pid);
  };

  const navigate = useNavigate();
  return (
    <section
      onClick={() => {
        navigate(`/shop/${EncodeProductId("11111111111")}`);
      }}
      className="p-2 cursor-pointer w-full min-h-[250px] bg-green-100/[.30] h-fit rounded-lg border-2 border-teal-800 flex flex-col justify-center items-center "
    >
      <img
        src={img}
        alt=""
        className="h-[100px] w-[100px] sm:w-[150px] sm:h-[150px] object-cover"
      />
      <div className="flex flex-col gap-2  items-center w-full">
        <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
        <description
          className={
            productPage
              ? "hidden text-justify sm:line-clamp-2"
              : " text-justify line-clamp-2"
          }
        >
          {description}
        </description>
        <div className="flex-col gap-2 flex md:flex-row justify-between sm:w-[80%] items-center flex-wrap ">
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
            className={
              productPage
                ? "py-2 rounded-md text-sm sm:text-md hover:ring-teal-800 hover:ring-2 transition-all flex items-center gap-2 sm:px-4 px-2 w-full md:w-fit justify-center text-white bg-teal-700"
                : "py-2 rounded-md  hover:ring-teal-800 hover:ring-2 transition-all flex items-center gap-2 sm:px-4 px-2 w-full md:w-fit justify-center text-white bg-teal-700"
            }
          >
            Add To Cart
            <FaBagShopping />
          </button>
        </div>
      </div>
    </section>
  );
};
