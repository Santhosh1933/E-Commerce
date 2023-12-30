import React from "react";
import { PiPlantFill } from "react-icons/pi";

const BannerFeatureProps = ({ avatar, title, content }) => {
  return (
    <div className="w-[90%] shadow-md rounded-md shadow-teal-100 sm:w-[250px] bg-white border-teal-700  border-2  p-4 flex justify-center items-center gap-4 md:w-[350px] lg:w-[30%]">
      {avatar}
      <div>
        <h3>{title}</h3>
        <p className="text-start line-clamp-2">{content}</p>
      </div>
    </div>
  );
};

export const BannerFeature = () => {
  return (
    <div className="h-fit min-h-[5vh] w-full -mt-[3vh]">
      <div className="flex justify-center gap-4 items-center flex-wrap w-[90%] mx-auto">
        <BannerFeatureProps
          avatar={<PiPlantFill className="text-[22px] w-[20%]" />}
          title="Natural Growth"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, aliquid ipsum. Impedit error deleniti et quas, corporis accusamus at distinctio?"
        />
        <BannerFeatureProps
          avatar={<PiPlantFill className="text-[22px] w-[20%]" />}
          title="Natural Growth"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, aliquid ipsum. Impedit error deleniti et quas, corporis accusamus at distinctio?"
        />
        <BannerFeatureProps
          avatar={<PiPlantFill className="text-[22px] w-[20%]" />}
          title="Natural Growth"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, aliquid ipsum. Impedit error deleniti et quas, corporis accusamus at distinctio?"
        />
      </div>
    </div>
  );
};
