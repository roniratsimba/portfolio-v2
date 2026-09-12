import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  amount?: number | "some" | "all";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.65,
  className = "",
  amount = 0.12,
  ...props
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initial = {
    opacity: 0,
    filter: "blur(4px)",
    ...getInitialOffset(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const, // fluid ease-out expo curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number | "some" | "all";
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  amount = 0.1,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<"div"> & { className?: string }> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
