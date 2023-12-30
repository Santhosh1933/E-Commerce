import React from "react";
import homePageImg from "../../assets/homePageImg.png";

export const HeroSession = () => {
  return (
    <div className="h-fit gap-8  flex flex-col mt-[5vh] justify-start items-center">
      <img
        src={homePageImg}
        alt=""
        className="h-[250px] object-cover w-[250px] "
      />
      <div className="w-[90%]">
        <h3 className="text-[28px] lg:text-[42px] w-full lg:w-3/4 xl:w-2/4 mx-auto font-bold text-center text-slate-800">
          EAT HEALTH AND <span className="text-green-800">STAY LONG </span>
          WITHOUT MEDICAL EXPENSE
        </h3>
      </div>
    </div>
  );
};
