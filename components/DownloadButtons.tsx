"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { buttonVariants, containerVariants } from "@/animations/animations";

const DownloadButtons = ({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "md" | "sm";
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "flex gap-4 items-center flex-wrap justify-center md:justify-start",
        className
      )}
    >
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/play-store-btn.svg"
          alt="download on play store"
          width={size === "sm" ? 120 : 140}
          height={size === "sm" ? 120 : 140}
          className="cursor-pointer"
        />
      </motion.div>
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/app-store-btn.svg"
          alt="download on app store"
          width={size === "sm" ? 120 : 140}
          height={size === "sm" ? 120 : 140}
          className="cursor-pointer"
        />
      </motion.div>
    </motion.div>
  );
};

export default DownloadButtons;
