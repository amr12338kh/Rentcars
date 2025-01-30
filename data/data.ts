import {
  BoxDataProps,
  CarCardProps,
  footerLinksProps,
  LinksProps,
  TestimonialCardProps,
} from "@/types/types";
import {
  CalendarDays,
  CarFrontIcon,
  MapPinCheckInside,
  UserRoundCheck,
} from "lucide-react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";

export const headerLinks: LinksProps = [
  "How it work",
  "Why choose us",
  "Rental deals",
  "Testimonials",
];

export const ourProducts: LinksProps = [
  "career",
  "car",
  "packages",
  "features",
  "priceline",
];

export const resources: LinksProps = [
  "download",
  "help center",
  "guides",
  "partner network",
  "cruises",
  "developer",
];

export const about: LinksProps = [
  "why choose us",
  "our story",
  "investor relations",
  "press center",
  "advertise",
];

export const follow: LinksProps = ["facebook", "instagram", "youtube"];

export const footerLinks: footerLinksProps[] = [
  {
    title: "Our Products",
    links: ourProducts,
  },
  {
    title: "Resources",
    links: resources,
  },
  {
    title: "About Rencars",
    links: about,
  },
  {
    title: "Follow Us",
    links: follow,
  },
];

export const companies = [
  "/honda-logo.svg",
  "/jaguar-logo.svg",
  "/nissan-logo.svg",
  "/volvo-logo.svg",
  "/audi-logo.svg",
  "/acura-logo.svg",
];

export const popularCars: CarCardProps[] = [
  {
    id: 1,
    title: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    gear: "auto",
    airConditioning: true,
    doors: 4,
    price: 1800,
    image: "/jaguar-xe-l-p250.svg",
  },
  {
    id: 2,
    title: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    gear: "auto",
    airConditioning: true,
    doors: 2,
    price: 2100,
    image: "/audi-r8.svg",
  },
  {
    id: 3,
    title: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    gear: "auto",
    airConditioning: true,
    doors: 4,
    price: 1600,
    image: "/bmw-m3.svg",
  },
  {
    id: 4,
    title: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    gear: "auto",
    airConditioning: true,
    doors: 2,
    price: 2300,
    image: "/lamborghini-huracan.svg",
  },
];

export const howItWork: BoxDataProps[] = [
  {
    icon: MapPinCheckInside,
    label: "Choose location",
    sublabel: "Choose your car and find your best car",
  },
  {
    icon: CalendarDays,
    label: "Pick-up date",
    sublabel: "Select your pick up date and time to book your car",
  },
  {
    icon: CarFrontIcon,
    label: "Book your car",
    sublabel: "Book your car and we will deliver it directly to you",
  },
];

export const whyChooseUs: BoxDataProps[] = [
  {
    icon: FaMoneyBill1Wave,
    label: "Best price guaranteed",
    sublabel: "Find a lower price? We’ll refund you 100% of the difference.",
  },
  {
    icon: UserRoundCheck,
    label: "Experience driver",
    sublabel:
      "Don’t have driver? Don’t worry, we have many experienced driver for you.",
  },
  {
    icon: TbClock24,
    label: "24 hour car delivery",
    sublabel: "Book your car anytime and we will deliver it directly to you.",
  },
  {
    icon: IoChatbubbles,
    label: "24/7 technical support",
    sublabel:
      "Have a question? Contact Rentcars support any time when you have problem.",
  },
];

export const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    username: "Emma Wilson",
    from: "London, UK",
    testimonial:
      "I have been using your services for 3 years. Your service is great, I will continue to use your service.",
    rating: 5.0,
    image: "/user-1.jpg",
  },
  {
    id: 2,
    username: "Charlie Johnson",
    from: "New York, US",
    testimonial:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    rating: 5.0,
    image: "/user-2.jpg",
  },
  {
    id: 3,
    username: "James Carter",
    from: "Sydney, Australia",
    testimonial:
      "Caretall's services are top-notch! The booking process was seamless, and the driver was extremely professional and friendly.",
    rating: 5.0,
    image: "/user-3.jpg",
  },
];
