"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SearchInputField, SearchInputValues } from "@/types/types";

const Search = () => {
  return (
    <div className="lg:secondary-container flex w-full">
      <form
        action=""
        className="bg-white shadow-md rounded-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-6 lg:space-x-6 lg:space-y-0 p-3"
      >
        {RenderInputWithPlaceholder(
          <MapPin className="text-muted-foreground size-8" />,
          "Location",
          "Search your location",
          "location"
        )}

        {RenderInputWithPlaceholder(
          <CalendarDays className="text-muted-foreground size-8" />,
          "Pickup date",
          "Tue 15 Feb, 09:00",
          "pickup"
        )}

        {RenderInputWithPlaceholder(
          <CalendarDays className="text-muted-foreground size-8" />,
          "Return date",
          "Tue 16 Feb, 11:00",
          "return"
        )}

        <Button size="default_wide" className="py-6 text-lg rounded-lg">
          Search
        </Button>
      </form>
    </div>
  );
};

const RenderInputWithPlaceholder = (
  icon: React.ReactNode,
  label: string,
  sublabel: string,
  field: SearchInputField
) => {
  const [focusedInput, setFocusedInput] = useState<SearchInputField | null>(
    null
  );
  const [inputValues, setInputValues] = useState<SearchInputValues>({
    location: "",
    pickup: "",
    return: "",
  });

  const handleInputChange = (field: SearchInputField, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex items-center">
      {icon}
      <div className="ml-4 relative flex items-center justify-center">
        <Input
          className="py-6 px-0 text-lg border-none focus:border-none focus:outline-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          value={inputValues[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onFocus={() => setFocusedInput(field)}
          onBlur={() => setFocusedInput(null)}
        />
        {focusedInput !== field && inputValues[field] === "" && (
          <div className="absolute top-0 left-0 flex items-center gap-4 pointer-events-none">
            <div>
              <p>{label}</p>
              <p className="font-light text-muted-foreground text-sm">
                {sublabel}
              </p>
            </div>
          </div>
        )}
      </div>
      {field !== "return" && (
        <Separator orientation="vertical" className="hidden lg:block" />
      )}
    </div>
  );
};

export default Search;
