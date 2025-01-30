"use client";

import Box from "./Box";
import { HeadingSubTitle, HeadingTitle } from "./Heading";
import Car from "./Car";
import { whyChooseUs } from "@/data/data";

const WhyChooseUs = () => {
  return (
    <div className="flex items-center justify-center lg:items-start lg:justify-between relative">
      <Car direction="left" />
      <div className="flex items-center lg:items-start flex-col gap-4 sm:gap-6 md:gap-8 ">
        <HeadingTitle title="Why Choose Us" />
        <HeadingSubTitle subTitle="We offer the best experience with our rental deals" />
        <Box
          data={whyChooseUs}
          orientation="vertical"
          className=" md:grid-cols-2 lg:grid-cols-1"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
