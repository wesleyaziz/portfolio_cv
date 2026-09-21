"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference">
        <a href="#top" className="font-display font-medium text-lg" data-cursor="explore">
          {/* PLACEHOLDER: 姓名 / Logo */}
          Wesley Wong<span className="text-brass">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[.15em]">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" data-cursor="link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-cursor="explore"
          className="relative z-50 w-9 h-9 flex flex-col justify-center gap-[7px]"
        >
          <motion.span
            className="block h-px w-full bg-paper"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-px w-full bg-paper"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-full bg-paper"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-ink"
            initial={{ clipPath: "circle(2% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(2% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="h-full w-full flex flex-col justify-center px-6 md:px-16">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    data-cursor="link"
                    className="font-display text-[13vw] md:text-[6vw] leading-[1.05] hover:text-brass transition-colors duration-500"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-[.15em] text-paper-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} className="social-link hover:text-paper" data-cursor="link">
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
