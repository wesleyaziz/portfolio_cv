"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, PanInfo, Variants } from "framer-motion";
import { ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";
import { works } from "@/data/works";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function WorksCarousel() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const isAnimating = useRef(false);
  const wheelLock = useRef(false);

  const activeWork = works[wrap(0, works.length, index)];

  const paginate = (newDirection: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setSlide(([prev]) => [prev + newDirection, newDirection]);
    setTimeout(() => {
      isAnimating.current = false;
    }, 550);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (wheelLock.current) return;
    if (Math.abs(e.deltaY) < 24) return;
    wheelLock.current = true;
    paginate(e.deltaY > 0 ? 1 : -1);
    setTimeout(() => {
      wheelLock.current = false;
    }, 700);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = Math.abs(info.offset.y) * info.velocity.y;
    if (swipe < -8000) paginate(1);
    else if (swipe > 8000) paginate(-1);
  };

  return (
    <section id="works" className="px-6 md:px-10 py-28 md:py-36">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <h2 className="font-display text-[9vw] md:text-[4.2vw] leading-none">精選作品</h2>
        <span className="font-mono text-xs uppercase tracking-[.15em] text-paper-dim hidden md:block">
          Selected Works — Drag / Scroll to browse
        </span>
      </div>

      <div
        className="relative h-[70svh] md:h-[80svh] overflow-hidden rounded-sm border border-line bg-ink-2"
        onWheel={handleWheel}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.a
            key={activeWork.id}
            href={activeWork.href}
            data-cursor="explore"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 },
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 cursor-grab active:cursor-grabbing"
          >
            {/* Media */}
            <div className="md:col-span-7 relative h-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeWork.image}
                alt={activeWork.title}
                className="w-full h-full object-cover grayscale-[.4] brightness-[.8] transition-[filter] duration-700 hover:grayscale-0 hover:brightness-100 select-none pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Info panel */}
            <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-12 py-8 md:py-0">
              <span className="font-mono text-xs text-paper-dim mb-4">
                {activeWork.index} / {String(works.length).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[9vw] md:text-[3vw] leading-tight mb-2">
                {activeWork.title}
              </h3>
              <p className="font-mono text-xs text-paper-dim mb-6">
                {activeWork.subtitle} — {activeWork.year}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeWork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full text-paper-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.15em] w-fit hover:text-brass transition-colors">
                View Case <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        </AnimatePresence>

        {/* Up / Down controls */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
          <button
            onClick={() => paginate(-1)}
            aria-label="上一件作品"
            data-cursor="link"
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-brass hover:text-brass transition-colors bg-ink/60 backdrop-blur"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center gap-2">
            {works.map((w, i) => (
              <button
                key={w.id}
                onClick={() => setSlide([i, i > wrap(0, works.length, index) ? 1 : -1])}
                aria-label={`前往作品 ${w.index}`}
                data-cursor="link"
                className="group py-1"
              >
                <span
                  className={`block font-mono text-[10px] transition-colors ${
                    i === wrap(0, works.length, index) ? "text-brass" : "text-paper-dim group-hover:text-paper"
                  }`}
                >
                  {w.index}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            aria-label="下一件作品"
            data-cursor="link"
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-brass hover:text-brass transition-colors bg-ink/60 backdrop-blur"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Progress rail (left) */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-px h-24 bg-line overflow-hidden hidden md:block">
          <motion.div
            className="w-full bg-glacier absolute left-0"
            style={{ height: `${100 / works.length}%` }}
            animate={{ top: `${wrap(0, works.length, index) * (100 / works.length)}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </section>
  );
}
