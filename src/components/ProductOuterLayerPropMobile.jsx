import React from "react";

export const ProductOuterLayerPropMobile = ({ children }) => {
  return (
    <div className="w-[95%] mx-auto gap-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
      {children}
    </div>
  );
};
