import { TestimonialCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({
  username,
  image,
  from,
  testimonial,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className=" max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full bg-white overflow-hidden z-20 h-full rounded-2xl shadow-md flex justify-between">
      <div className="basis-1/2 relative aspect-square z-20">
        <Image
          src={image}
          alt={username + "Image"}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/2 z-20 py-3 px-5 sm:py-4 sm:px-6 md:py-6 md:px-8 xl:py-8 xl:px-12 flex flex-col justify-between">
        <div>
          <div className="flex gap-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-muted-foreground">
              {rating.toFixed(1)}
            </h3>
            <span className="flex items-end text-base md:text-lg lg:text-xl text-muted-foreground font-medium">
              Stars
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 md:mt-2 lg:mt-3">
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index} className="text-yellow-500">
                <FaStar className="size-3 md:size-4 lg:size-5" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm md:text-base lg:text-[18px]">“{testimonial}”</p>
        </div>

        <div>
          <h5 className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl">
            {username}
          </h5>
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-light text-muted-foreground">
            From {from}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
