"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationType = "fade" | "slide" | "scale" | "fadeSlide";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  type?: AnimationType;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const getVariants = (
  type: AnimationType,
  direction: AnimationDirection
): Variants => {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  switch (type) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    case "slide":
      return {
        hidden: { ...directionOffset[direction], opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
      };
    case "scale":
      return {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      };
    case "fadeSlide":
      return {
        hidden: { ...directionOffset[direction], opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
      };
  }
};

export function MotionWrapper({
  children,
  className,
  type = "fadeSlide",
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: MotionWrapperProps) {
  const variants = getVariants(type, direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
