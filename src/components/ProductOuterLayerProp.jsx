import React from "react";

export const ProductOuterLayerProp = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
      {children}
    </div>
  );
};
