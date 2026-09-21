"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    index: "01",
    title: "品牌互動網站",
    desc: "從敘事架構到動態細節，打造具高辨識度的品牌數位門面。",
  },
  {
    index: "02",
    title: "創意動態開發",
    desc: "以 GSAP、Framer Motion、WebGL 打造細膩流暢、具真實質感的互動效果。",
  },
  {
    index: "03",
    title: "原型與顧問",
    desc: "協助團隊在早期階段驗證互動概念，快速產出高保真原型。",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-28 md:py-36 border-t border-line">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-[9vw] md:text-[4.2vw] leading-none">服務項目</h2>
        <span className="font-mono text-xs uppercase tracking-[.15em] text-paper-dim hidden md:block">
          Services — 03
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.index}
            className="bg-ink p-8 md:p-10 hover:bg-ink-2 transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs text-paper-dim">{s.index}</span>
            <h3 className="font-display text-2xl md:text-3xl mt-6 mb-4">{s.title}</h3>
            <p className="text-sm text-paper-dim leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
