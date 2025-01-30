"use client";

import React from "react";
import Search from "./Search";
import DownloadButtons from "./DownloadButtons";
import { motion } from "framer-motion";
import {
  containerVariants,
  spanVariants,
  titleVariants,
  underlineVariants,
  wordVariants,
} from "@/animations/animations";
import Car from "./Car";

const Hero = () => {
  const text =
    "Get a car wherever and whenever you need it with your IOS and Android device.".split(
      " "
    );

  return (
    <div className="">
      <div className="flex justify-between items-center relative min-h-[50vh]">
        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center mx-auto md:mx-0 items-center md:items-start md:justify-start"
        >
          <div className="mt-44 space-y-10 max-w-[400px] sm:max-w-[500px] md:max-w-[400px] text-center md:text-left">
            <motion.h1 variants={titleVariants} className="text-5xl font-bold">
              Find, book and rent a car{" "}
              <motion.span
                variants={spanVariants}
                className="text-primary relative"
              >
                Easily
                <motion.div
                  variants={underlineVariants}
                  className="bg-text_underline absolute top-14 left-0 bg-no-repeat w-full h-full"
                />
              </motion.span>
            </motion.h1>
            <p className="text-[18px]">
              {text.map((el, i) => (
                <motion.span custom={i} variants={wordVariants} key={i}>
                  {el}{" "}
                </motion.span>
              ))}
            </p>

            <DownloadButtons />
          </div>
        </motion.div>

        {/* Right Side */}
        <Car direction="right" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1,
          delay: 1.2,
        }}
        className="relative z-20 mt-20 lg:mt-28 xl:mt-40 2xl:mt-64"
      >
        <Search />
      </motion.div>
    </div>
  );
};

export default Hero;
