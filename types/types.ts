import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export type SearchInputField = "location" | "pickup" | "return";

export interface SearchInputValues {
  location: string;
  pickup: string;
  return: string;
}

export interface HowItWorksBox {
  icon: LucideIcon;
  label: string;
  sublabel: string;
}

export interface BoxDataProps {
  icon: LucideIcon | IconType;
  label: string;
  sublabel: string;
}

export interface BoxProps {
  data: BoxDataProps[];
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export interface InfiniteScrollProps {
  children: React.ReactNode;
  className?: string;
  space?: "lg" | "md" | "sm" | "xs";
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
  maskGradient?: boolean;
}

export interface CarCardProps {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  passengers: number;
  gear: string;
  airConditioning: boolean;
  doors: number;
  price: number;
  image: string;
}

export interface TestimonialCardProps {
  id: number;
  rating: number;
  testimonial: string;
  username: string;
  from: string;
  image: string;
}

export type LinksProps = string[];

export interface footerLinksProps {
  title: string;
  links: LinksProps;
}
