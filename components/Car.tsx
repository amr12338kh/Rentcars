import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  floatingAnimation,
  frameVariants,
  leftCarVariants,
  rightCarVariants,
} from "@/animations/animations";

const Car = ({
  className,
  direction,
}: {
  className?: string;
  direction: "right" | "left";
}) => {
  return direction === "right" ? (
    <div className={cn("hidden md:block", className)}>
      <motion.div
        variants={frameVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-[100px] float-end -right-[220px]  w-[250px] md:w-[550px] lg:w-[620px] xl:w-[700px]"
      >
        <Image
          src="/frame.svg"
          alt="frame image"
          width={700}
          height={700}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        variants={rightCarVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="absolute top-[170px] lg:top-[125px] -right-[100px] xl:-right-[120px] 2xl:-right-[190px] 3xl:-right-[325px] w-[420px] min-[850px]:w-[480px] lg:w-[650px] xl:w-[850px] 2xl:w-[1000px]"
      >
        <motion.div animate={floatingAnimation}>
          <Image
            src="/hero-car.svg"
            alt="car image"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  ) : (
    <div className="hidden lg:block">
      <motion.div
        variants={frameVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-[100px] xl:top-0 -left-[420px] min-[1124px]:-left-[350px] xl:-left-[520px]  w-[900px] xl:w-[1300px]"
      >
        <Image
          src="/frame-2.svg"
          alt="frame image"
          width={1300}
          height={13000}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        variants={leftCarVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="absolute top-[300px] xl:top-[220px] 2xl:top-[170px] -left-[160px] xl:-left-[220px] 2xl:-left-[320px] 3xl:-left-[420px] w-[420px] min-[850px]:w-[480px] lg:w-[550px] xl:w-[850px] 2xl:w-[1050px]"
      >
        <motion.div
          whileInView={floatingAnimation}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/why-choose-us-car.svg"
            alt="car image"
            width={1200}
            height={1200}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Car;
