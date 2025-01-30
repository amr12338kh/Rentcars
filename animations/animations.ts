export const headerContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const headerItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

export const headerButtonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

export const sidebarContainerVariants = {
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  visible: {
    width: "auto",
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

export const sidebarItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    x: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// export const sidebarButtonVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const spanVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
      delay: 0.4,
    },
  },
};

export const underlineVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.6,
      delay: 0.6,
    },
  },
};

export const frameVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

export const rightCarVariants = {
  hidden: {
    y: -50,
    x: 200,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const leftCarVariants = {
  hidden: {
    y: -50,
    x: -200,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const carCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const carCardTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

export const boxVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.6,
      delay: 0.4,
    },
  },
};

export const boxTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
      delay: i * 0.05,
    },
  }),
};

export const subTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 1 },
  },
};

export const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

export const phoneVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
