import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { debounce } from "lodash";
import { useToast } from "@chakra-ui/react";


const debouncedUpdateQuantity = debounce((newQuantity,toast) => {
  const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 5000);
  });
  toast.promise(examplePromise, {
    success: {
      title: "Product Successfully updated",
      description: `${newQuantity} quantity is update`,
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
  console.log("Updating quantity:", newQuantity);
}, 1000);

export const CartProductProp = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const toast = useToast();

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    debouncedUpdateQuantity(newQuantity,toast);
  };

  return (
    <div className="w-full cursor-pointer flex items-center justify-between p-2 bg-slate-50 border shadow-md">
      <div className="w-1/4 sm:w-fit">
        <img
          src={props.img}
          alt=""
          className="h-[100px] w-[100px] object-cover"
        />
      </div>
      <div className="w-1/4">
        <p className="line-clamp-1 sm:line-clamp-2">{props.title}</p>
        <p>Rs.{props.price * quantity}/kg</p>
      </div>
      <div className="flex w-1/4 justify-around border items-center">
        <button
          onClick={() => {
            updateQuantity(quantity === 1 ? quantity : quantity - 1);
          }}
          className="border w-full text-center p-1"
        >
          -
        </button>
        <p className="border w-full text-center p-1">{quantity}</p>
        <button
          onClick={() => {
            updateQuantity(quantity + 1);
          }}
          className="border w-full text-center p-1"
        >
          +
        </button>
      </div>
      <button className="w-[10%]">
        <MdDeleteForever className="text-2xl text-red-700" />
      </button>
    </div>
  );
};
