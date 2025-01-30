"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BoxProps } from "@/types/types";
import {
  boxTextVariants,
  boxVariants,
  containerVariants,
  iconVariants,
} from "@/animations/animations";

const Box = ({ data, className, orientation = "horizontal" }: BoxProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        `grid ${
          orientation === "horizontal"
            ? `grid-cols-1 items-center gap-10 sm:gap-14 md:gap-20 lg:gap-32 sm:grid-cols-3`
            : "grid-cols-1 gap-5 lg:gap-10"
        } mt-10`,
        className
      )}
    >
      {data.map(({ icon: Icon, label, sublabel }, index) => (
        <motion.div
          key={index}
          variants={boxVariants}
          className={`flex ${
            orientation === "horizontal"
              ? "flex-col justify-center"
              : "flex-row"
          } gap-4 lg:gap-6 items-center`}
        >
          <motion.div
            variants={iconVariants}
            className={`flex items-center justify-center ${
              orientation === "horizontal" ? "p-16 sm:p-8" : "p-4 lg:p-6"
            } bg-primary/10 text-primary rounded-2xl`}
          >
            <Icon
              className={orientation === "horizontal" ? "size-12" : "size-6"}
            />
          </motion.div>

          <motion.div
            variants={boxTextVariants}
            custom={index}
            className={`${
              orientation === "horizontal"
                ? "text-center"
                : "max-w-sm md:max-w-[300px] lg:max-w-sm"
            } space-y-1 lg:space-y-2`}
          >
            <h6
              className={`${
                orientation === "horizontal"
                  ? "text-[20px] sm:text-base"
                  : "text-base"
              } lg:text-[20px] font-semibold`}
            >
              {label}
            </h6>
            <p
              className={`text-muted-foreground font-medium ${
                orientation === "horizontal"
                  ? "max-w-[260px] sm:max-w-[210px] text-base sm:text-xs lg:text-sm"
                  : "text-sm sm:text-xs lg:text-base"
              }`}
            >
              {sublabel}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Box;
