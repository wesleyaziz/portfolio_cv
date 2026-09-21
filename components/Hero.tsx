"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Taipei",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-10 pt-32 pb-10 overflow-hidden">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f3efe6 1px, transparent 1px), linear-gradient(to bottom, #f3efe6 1px, transparent 1px)",
          backgroundSize: "6.25% 100%, 100% 25%",
        }}
      />
      {/* glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #c9a869, transparent 70%)" }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[.2em] text-paper-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-glacier animate-pulse" />
          {/* PLACEHOLDER: 目前狀態 */}
          <span>Available for select projects — 2026</span>
        </motion.div>

        <h1 className="font-display font-light leading-[.92] text-paper">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13vw] md:text-[7.4vw]"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              From concept to creation — 
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[13vw] md:text-[7.4vw] italic text-paper-dim"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              turning imagination into reality.
            </motion.span>
          </span>
        </h1>

        <span className="block overflow-hidden mt-10 max-w-lg">
          <motion.p
            className="font-mono text-sm md:text-base leading-relaxed text-paper-dim"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            {/* PLACEHOLDER: 一句話定位 */}
            I am a hybrid technical specialist combining an engineering drafting background with an IT-driven mindset, focused on semiconductor specialty gas piping design and structured engineering data management.
          </motion.p>
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <div className="w-px h-14 bg-paper/20 relative overflow-hidden">
            <motion.span
              className="absolute left-0 top-0 w-full h-full bg-brass"
              animate={{ top: ["-100%", "100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-paper-dim [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>

        <div className="hidden md:flex flex-col items-end font-mono text-[11px] text-paper-dim uppercase tracking-[.15em] gap-1">
          <span>Taiwan · UTC+8</span>
          <span>{time}</span>
        </div>
      </div>
    </section>
  );
}
