import { Center, Divider } from "@chakra-ui/react";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const TestimonialsProps = ({ content, user, place }) => {
  return (
    <section className="w-full xl:w-[350px] md:w-[300px] p-4 flex flex-col gap-3 justify-center items-center text-justify">
      <div>
        <FaQuoteRight className="text-[22px] text-slate-600" />
      </div>
      <div className="">"{content}"</div>
      <Center height="30px">
        <p className="px-4">{user}</p>
        <Divider orientation="vertical" color={"green"} />
        <p className="px-4">{place}</p>
      </Center>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <div className="h-fit mt-[5vh] w-full bg-teal-50 py-8">
      <div className="w-[90%] mx-auto xl:w-3/4 flex flex-col gap-4">
        <h3 className="md:text-[35px] text-[25px] text-center font-semibold ">
          Our <span className="text-teal-700">Happy</span> Customer's
        </h3>
        <div className="flex flex-wrap w-full justify-center gap-4 items-center ">
          <TestimonialsProps
            content={
              "BiteFresh is absolutely amazing. It provides a rich collection of pre-designed components and pages, from a welcoming landing page featuring a variety of fresh vegetables to detailed product listings. An ideal solution for creating your next online vegetable marketplace."
            }
            user={"santhosh"}
            place={"salem"}
          />

          <TestimonialsProps
            content={
              "BiteFresh is absolutely amazing. It provides a rich collection of pre-designed components and pages, from a welcoming landing page featuring a variety of fresh vegetables to detailed product listings. An ideal solution for creating your next online vegetable marketplace."
            }
            user={"santhosh"}
            place={"salem"}
          />

          <TestimonialsProps
            content={
              "BiteFresh is absolutely amazing. It provides a rich collection of pre-designed components and pages, from a welcoming landing page featuring a variety of fresh vegetables to detailed product listings. An ideal solution for creating your next online vegetable marketplace."
            }
            user={"santhosh"}
            place={"salem"}
          />
        </div>
      </div>
    </div>
  );
};
