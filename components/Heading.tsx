"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  subTitleVariants,
  titleVariants,
  wordVariants,
} from "@/animations/animations";

export const HeadingTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex"
    >
      <motion.div
        className={cn(
          "py-2 px-8 rounded-lg font-medium bg-primary/10 text-primary text-base sm:text-lg",
          className
        )}
      >
        <h1 className="uppercase">{title || "Heading Title"}</h1>
      </motion.div>
    </motion.div>
  );
};

export const HeadingSubTitle = ({
  subTitle,
  blueText,
  className,
}: {
  subTitle: string;
  blueText?: string;
  className?: string;
}) => {
  return (
    <motion.h2
      variants={subTitleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "text-center lg:text-start text-[28px] sm:text-[34px] md:text-[38px] font-semibold mt-4 max-w-xl",
        className
      )}
    >
      {subTitle.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          custom={i}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
      {blueText && (
        <motion.span
          variants={wordVariants}
          custom={subTitle.split(" ").length}
          className="text-primary"
        >
          {blueText}
        </motion.span>
      )}
    </motion.h2>
  );
};
