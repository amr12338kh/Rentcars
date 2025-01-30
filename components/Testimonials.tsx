import React from "react";
import { HeadingSubTitle, HeadingTitle } from "./Heading";
import TestimonialCard from "./TestimonialCard";
import InfiniteScroll from "./InfiniteScroll";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <div className="bg-primary/[0.05] py-20 sm:py-40 relative">
      <div className="absolute hidden sm:block w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] top-0 right-5 lg:-right-10 2xl:right-20">
        <img src="/quote-right.svg" alt="quote right" />
      </div>
      <div className="absolute hidden sm:block w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] top-48 md:top-28 left-5 lg:left-10 2xl:left-36">
        <img src="/quote-left.svg" alt="quote right" />
      </div>
      <div className="flex flex-col items-center justify-center mb-14">
        <HeadingTitle title="Testimonials" />
        <HeadingSubTitle subTitle="What people say about us?" />
      </div>
      <InfiniteScroll maskGradient={false} space="xs" className="py-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Testimonials;
