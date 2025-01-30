import React from "react";
import Logo from "./Logo";
import { Separator } from "./ui/separator";
import { footerLinks } from "@/data/data";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaSquareFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "facebook":
        return <FaSquareFacebook className="size-5" />;
      case "instagram":
        return <FaInstagram className="size-5" />;
      case "youtube":
        return <FaYoutube className="size-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className=" relative z-20 bg-[#051C34] py-10 md:py-20">
      <div className="main-container">
        <div className="grid gap-y-10 md:gap-y-0 grid-cols-1 md:grid-cols-2 md:justify-between">
          <div className=" flex flex-col ">
            <Logo color="white" size="md" className=" mb-8 md:mb-4" />
            <ul className=" space-y-6">
              <li className=" footer-links_list">
                <span>
                  <MapPin className="size-7" />
                </span>{" "}
                25566 Hc 1, Glenallen, Alaska, 99588, USA
              </li>
              <li className="footer-links_list">
                <span>
                  <Phone className="size-7" />{" "}
                </span>{" "}
                +603 4784 273 12
              </li>
              <li className="footer-links_list">
                <span>
                  <Mail className="size-7" />
                </span>{" "}
                rentcars@gmail.com
              </li>
            </ul>
          </div>
          <div className="grid gap-y-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {footerLinks.map(({ title, links }, index) => {
              return (
                <div key={index}>
                  <h3 className=" text-muted font-medium mb-4">{title}</h3>
                  <ul
                    className={`space-y-2 ${
                      title === "Follow Us" &&
                      "flex items-center gap-4 !space-y-0"
                    }`}
                  >
                    {links.map((link, index) => (
                      <li className={`footer-links_list`} key={index}>
                        <Link href="#">
                          {title === "Follow Us"
                            ? renderSocialIcon(link as string)
                            : link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <Separator className=" bg-muted/30 mt-16 mb-6" />
        <div>
          <span className="text-xs text-muted/70">
            Copyright {year} • Rentcars, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
