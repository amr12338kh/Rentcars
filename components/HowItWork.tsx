"use client";

import { HeadingSubTitle, HeadingTitle } from "./Heading";
import React from "react";
import Box from "./Box";
import { howItWork } from "@/data/data";

const HowItWork = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 items-center justify-center">
        <HeadingTitle title="How it Work" />
        <HeadingSubTitle
          subTitle="Rent with following 3 working steps"
          className=" !text-center lg:max-w-3xl"
        />
        <Box data={howItWork} orientation="horizontal" />
      </div>
    </div>
  );
};

export default HowItWork;
