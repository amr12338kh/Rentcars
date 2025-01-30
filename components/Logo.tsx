import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  color = "primary",
  size = "sm",
}: {
  className?: string;
  color?: "primary" | "white";
  size?: "sm" | "md";
}) => {
  return (
    <Link href="#home" className={cn(className)}>
      <Image
        src={color === "primary" ? "/logo.svg" : "/logo-white.svg"}
        alt="logo"
        height={size === "sm" ? 120 : 140}
        width={size === "sm" ? 120 : 140}
      />
    </Link>
  );
};

export default Logo;
