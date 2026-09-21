"use client";

import { motion } from "framer-motion";

const ITEMS = ["Creative Development", "Motion Design", "WebGL", "Brand Experience"];

export default function Marquee() {
  const loopItems = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-line py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap font-display italic text-2xl md:text-4xl text-paper-dim w-fit"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...loopItems, ...loopItems].map((item, i) => (
          <span key={i} className="px-6 flex items-center gap-6">
            {item} <span className="text-line">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
