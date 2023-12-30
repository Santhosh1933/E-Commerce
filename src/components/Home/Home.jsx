import React from "react";
import { NavBar } from "../NavBar";
import { HomeBanner } from "./HomeBanner";
import { BannerFeature } from "./BannerFeature";
import { HeroSession } from "./HeroSession";
import { Testimonials } from "./Testimonials";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeBanner />
      <BannerFeature />
      <HeroSession />
      <Testimonials />
    </div>
  );
};
