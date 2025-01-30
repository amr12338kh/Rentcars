"use client";

import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import AccountDropdown from "./AccountDropdown";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import {
  headerButtonVariants,
  headerContainerVariants,
  headerItemVariants,
} from "@/animations/animations";
import { headerLinks } from "@/data/data";

const Header = () => {
  return (
    <motion.header
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
      className="main-container mt-6 py-2 flex justify-between items-center"
    >
      {/* Logo */}
      <motion.div variants={headerItemVariants}>
        <Logo />
      </motion.div>

      {/* Main Header Content */}
      <motion.ul
        variants={headerContainerVariants}
        className="hidden md:flex gap-6 lg:gap-10 xl:gap-14 text-muted-gray text-sm lg:text-base"
      >
        {headerLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={headerItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={"#" + link.replaceAll(" ", "-").toLowerCase()}
              className="header_list_item"
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Sign in & Sign up Buttons */}
      <motion.div
        variants={headerContainerVariants}
        className="hidden lg:flex gap-2 z-10"
      >
        <motion.div
          variants={headerButtonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="default_wide" variant="link">
            Sign in
          </Button>
        </motion.div>
        <motion.div
          variants={headerButtonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="default_wide">Sign up</Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={headerItemVariants}
        className="hidden md:block lg:hidden z-10"
      >
        <AccountDropdown />
      </motion.div>

      {/* Sidebar */}
      <motion.div variants={headerItemVariants} className="md:hidden block">
        <Sidebar />
      </motion.div>
    </motion.header>
  );
};

export default Header;
