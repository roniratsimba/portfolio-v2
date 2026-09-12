import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text" | "click">("default");
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid trailing effect
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.3 });

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerDown = () => {
      setCursorState("click");
    };

    const handlePointerUp = () => {
      setCursorState("default");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Target morphing inspector
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor-magnetic], .cursor-pointer'
      );

      if (interactive) {
        setCursorState("hover");
      } else if (target.closest("p, h1, h2, h3, h4, h5, span, strong")) {
        setCursorState("default");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  // Variants for morphing ring
  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(34, 197, 94, 0.04)",
      borderColor: "rgba(34, 197, 94, 0.45)",
      borderWidth: 1.5,
      scale: 1,
    },
    hover: {
      width: 54,
      height: 54,
      backgroundColor: "rgba(34, 197, 94, 0.15)",
      borderColor: "rgba(34, 197, 94, 0.9)",
      borderWidth: 1.5,
      scale: 1.1,
    },
    click: {
      width: 26,
      height: 26,
      backgroundColor: "rgba(34, 197, 94, 0.3)",
      borderColor: "rgba(34, 197, 94, 1)",
      borderWidth: 2,
      scale: 0.9,
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: "rgba(34, 197, 94, 0.8)",
      borderColor: "transparent",
      borderWidth: 0,
      scale: 1,
    },
  };

  const dotVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "#22c55e",
    },
    hover: {
      scale: 0.3,
      opacity: 0.4,
      backgroundColor: "#ffffff",
    },
    click: {
      scale: 1.4,
      opacity: 1,
      backgroundColor: "#22c55e",
    },
    text: {
      scale: 0,
      opacity: 0,
      backgroundColor: "#22c55e",
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Morphing Outer Halo / Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={ringVariants}
        animate={cursorState}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 26,
          mass: 0.2,
        }}
        className="rounded-full shadow-[0_0_20px_rgba(34,197,94,0.25)] backdrop-blur-[1px]"
      />

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={cursorState}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_#22c55e]"
      />
    </div>
  );
};
