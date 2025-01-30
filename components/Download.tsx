"use client";

import React from "react";
import { HeadingSubTitle, HeadingTitle } from "./Heading";
import DownloadButtons from "./DownloadButtons";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  floatingAnimation,
  phoneVariants,
  wordVariants,
} from "@/animations/animations";

const Download = () => {
  const text = "For faster, easier booking and exclusive deals.".split(" ");

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between relative gap-y-10 sm:gap-y-0">
      <div className="relative flex flex-col items-center sm:items-start gap-y-2 sm:gap-y-0 sm:pb-20">
        <div className=" hidden lg:block absolute -top-32 -z-20 -left-[350px] w-[900px]">
          <Image src="frame-3.svg" alt="frame 3" width={1000} height={1000} />
        </div>
        <HeadingTitle title="download" />
        <HeadingSubTitle
          subTitle="Download Rentcars App for"
          blueText="FREE"
          className="sm:!text-start mb-2 sm:mb-4 !max-w-sm sm:!max-w-xs lg:!max-w-xl !text-3xl  lg:!text-5xl"
        />
        <p className=" text-center sm:text-start text-sm lg:text-base sm:max-w-[250px] md:max-w-fit">
          {text.map((el, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <DownloadButtons
          size="md"
          className="mt-8 sm:!gap-1 md:!gap-4 sm:!justify-start"
        />
      </div>
      <motion.div
        variants={phoneVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=" sm:absolute bottom-0 right-0 max-w-[300px] lg:max-w-[400px]"
      >
        <motion.div animate={floatingAnimation}>
          <Image
            src="/download-phone.svg"
            alt="Download Phone"
            width={400}
            height={400}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Download;
