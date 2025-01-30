import React from "react";
import { HeadingSubTitle, HeadingTitle } from "./Heading";
import { Button } from "./ui/button";
import { MoveRightIcon } from "lucide-react";
import CarCard from "./CarCard";
import { popularCars } from "@/data/data";

const PopularRentalDeals = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeadingTitle title="popular rental deals" />
      <HeadingSubTitle
        subTitle="Most popular cars rental deals"
        className="!text-center lg:max-w-2xl"
      />
      <div className="flex items-center justify-center gap-10 my-20 flex-wrap">
        {popularCars.map((car) => (
          <div key={car.id}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
      <Button
        size="default_wide"
        variant="outline"
        className=" text-muted-foreground"
      >
        Show all vehicles <MoveRightIcon className=" size-4" />
      </Button>
    </div>
  );
};

export default PopularRentalDeals;
