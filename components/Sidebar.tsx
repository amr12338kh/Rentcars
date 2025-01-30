"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headerLinks } from "@/data/data";
import {
  buttonVariants,
  sidebarContainerVariants,
  sidebarItemVariants,
} from "@/animations/animations";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <SheetTrigger className="bg-primary rounded p-1 hover:bg-primary/90 transition">
        <AlignJustify className="size-5 text-white" />
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col h-full p-6">
        <SheetHeader className="space-y-6">
          <SheetTitle>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="logo"
                height={120}
                width={120}
                priority
              />
            </div>
          </SheetTitle>
          <SheetDescription className="text-center text-muted-foreground">
            Get a car wherever and whenever you need it
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-10 flex-1 w-full">
          <AnimatePresence>
            {open && (
              <motion.ul
                className="flex flex-col gap-6 text-lg"
                variants={sidebarContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {headerLinks.map((link, index) => (
                  <motion.li key={index} variants={sidebarItemVariants}>
                    <Link
                      href={"#" + link.replaceAll(" ", "-").toLowerCase()}
                      className="sidebar_list_item"
                      onClick={clickHandler}
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              className="flex justify-center gap-3 mt-auto pt-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div variants={buttonVariants}>
                <Button
                  size="default_wide"
                  variant="outline"
                  className="hover:bg-primary/5"
                >
                  Sign in
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button size="default_wide" className="hover:bg-primary/90">
                  Sign up
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
