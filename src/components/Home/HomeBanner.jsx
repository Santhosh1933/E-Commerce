import React from "react";
import heroBanner from "../../assets/heroBanner.jpg";

export const HomeBanner = () => {
  return (
    <div>
      <img src={heroBanner} alt="" className="h-[100vh] pt-[10vh] w-full" />
    </div>
  );
};
