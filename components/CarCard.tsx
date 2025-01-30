"use client";

import React from "react";
import { motion } from "framer-motion";
import { CarCardProps } from "@/types/types";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { MoveRight, Snowflake, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import {
  carCardTextVariants,
  carCardVariants,
  containerVariants,
  iconVariants,
} from "@/animations/animations";

const CarCard = ({
  title,
  image,
  price,
  rating,
  reviews,
  passengers,
  gear,
  airConditioning,
  doors,
}: CarCardProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="p-6 shadow-md rounded-2xl space-y-6"
    >
      {/* Image Section */}
      <motion.div
        variants={carCardVariants}
        className="flex items-center justify-center"
      >
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="object-contain"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div variants={carCardVariants} className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-xs flex gap-1">
              <FaStar className="text-yellow-500" />
              {rating}
            </span>
            <span className="text-muted-foreground text-xs">
              ({reviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        variants={carCardVariants}
        className="flex text-muted-foreground text-sm justify-center gap-6 items-center"
      >
        <motion.div variants={iconVariants} className="space-y-3">
          <span className="flex gap-1">
            <User2Icon className="size-5" /> {passengers} passengers
          </span>
          <span className="flex gap-1">
            <Snowflake className="size-5" />
            {airConditioning ? "Air conditioning" : ""}
          </span>
        </motion.div>
        <motion.div variants={iconVariants} className="space-y-3">
          <span className="capitalize flex gap-1">
            <GiGearStickPattern className="size-5" />
            {gear}
          </span>
          <span className="flex gap-1">
            <GiCarDoor className="size-5" />
            {doors} doors
          </span>
        </motion.div>
      </motion.div>

      {/* Price Section */}
      <motion.div variants={carCardTextVariants} custom={1}>
        <Separator className="mb-4" />
        <div className="flex justify-between">
          <span className="text-muted-foreground">Price</span>
          <span className="font-semibold">
            ${price.toLocaleString()}
            <span className="font-normal text-muted-foreground">/day</span>
          </span>
        </div>
      </motion.div>

      {/* Button Section */}
      <motion.div
        variants={carCardTextVariants}
        custom={2}
        className="flex w-full"
      >
        <Link href={`/#`} className="w-full">
          <Button className="w-full">
            Rent Now <MoveRight className="size-4" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CarCard;
