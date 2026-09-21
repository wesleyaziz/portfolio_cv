"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor with a fast dot + a lagging ring.
 * Hover targets opt in via:
 *   data-cursor="link"     -> ring inverts to brass, no label
 *   data-cursor="explore"  -> ring grows, shows "View"
 *
 * Automatically disabled on touch devices (see isTouch check).
 */
export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [variant, setVariant] = useState<"idle" | "link" | "explore">("idle");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring lags behind the raw mouse position (spring approximates lerp)
  const ringX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) {
        setVariant((target.getAttribute("data-cursor") as "link" | "explore") || "idle");
      } else {
        setVariant("idle");
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Dot: follows raw position exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-paper pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      {/* Ring: lags behind via spring, morphs on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full flex items-center justify-center pointer-events-none border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: variant === "explore" ? 88 : variant === "link" ? 64 : 44,
          height: variant === "explore" ? 88 : variant === "link" ? 64 : 44,
          backgroundColor:
            variant === "explore" ? "#f3efe6" : variant === "link" ? "#c9a869" : "rgba(0,0,0,0)",
          borderColor:
            variant === "explore" ? "#f3efe6" : variant === "link" ? "#c9a869" : "rgba(243,239,230,0.4)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="font-mono text-[10px] tracking-wider text-ink uppercase whitespace-nowrap"
          animate={{ opacity: variant === "explore" ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
}
