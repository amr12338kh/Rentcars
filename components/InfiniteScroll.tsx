"use client";

import { cn } from "@/lib/utils";
import { InfiniteScrollProps } from "@/types/types";
import React, { useState } from "react";
import { useEffect, useRef } from "react";

const InfiniteScroll = ({
  children,
  className,
  space = "md",
  speed = "normal",
  direction = "right",
  maskGradient = true,
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const getGapClass = () => {
    const gaps = {
      lg: "gap-40",
      md: "gap-20",
      sm: "gap-10",
      xs: "gap-6",
    };
    return gaps[space] || gaps.md;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        maskGradient && "infinite-scroll_mask_gradient",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max flex-nowrap",
          start && "animate-scroll ",
          getGapClass()
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroll;
