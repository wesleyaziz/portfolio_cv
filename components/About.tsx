"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "JavaScript / TypeScript",
  "GSAP / Framer Motion",
  "Three.js / WebGL",
  "React / Next.js",
  "Figma",
  "Creative Coding",
];

const STATS = [
  { value: "6+", label: "Years" },
  { value: "40+", label: "Projects" },
  { value: "12", label: "Awards" },
];

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36 border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          className="md:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="font-mono text-xs uppercase tracking-[.15em] text-paper-dim">About — 02</span>
          <h2 className="font-display text-[9vw] md:text-[3vw] leading-[1.05] mt-4">
            在細節裡，
            <br />
            找到節奏。
          </h2>

          {/* PLACEHOLDER: 個人照片 */}
          <div className="mt-10 aspect-[3/4] rounded-sm overflow-hidden hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
              alt="個人照片"
              className="w-full h-full object-cover grayscale-[.3]"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-7 md:col-start-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* PLACEHOLDER: 自述文字 */}
          <p className="font-display text-[6.5vw] md:text-[2.1vw] leading-[1.4] text-paper">
            我相信好的網頁體驗，是理性工程與感性敘事的交會點。過去幾年，我專注於為品牌與工作室打造具備細膩互動、流暢動態與高辨識度視覺語言的數位作品——從概念發想、原型製作到前端實作，我習慣親自參與每一個環節。
          </p>

          <p className="mt-8 font-sans text-base leading-relaxed text-paper-dim max-w-xl">
            合作時，我重視清晰的溝通與對細節的堅持。無論是新創團隊的品牌網站，或是大型工作室的互動裝置專案，我都希望每一次協作都能留下值得被記住的東西。
          </p>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[.15em] text-paper-dim mb-4">專長 / Toolkit</p>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  data-cursor="explore"
                  className="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-md">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-brass">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-paper-dim mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
