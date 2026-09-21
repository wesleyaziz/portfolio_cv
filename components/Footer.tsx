"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

// PLACEHOLDER: 你的 email
const EMAIL = "wesleywongtk@gmial.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <footer id="contact" className="px-6 md:px-10 pt-28 md:pt-36 pb-10 border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-xs uppercase tracking-[.15em] text-paper-dim">Contact — 04</span>
        <h2 className="font-display font-light leading-[.95] mt-6">
          <div className="text-[13vw] md:text-[6.5vw]">Contact me</div>
          <div className="text-[13vw] md:text-[6.5vw] italic">
            for more information.<span className="text-paper-dim">。</span>
          </div>
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <button
          onClick={handleCopy}
          data-cursor="explore"
          className="group flex items-center gap-4 font-mono text-lg md:text-2xl border-b border-line pb-3 w-fit hover:border-brass transition-colors"
        >
          <span>{copied ? "copied email！" : EMAIL}</span>
          {copied ? (
            <Check className="w-4 h-4 text-brass" />
          ) : (
            <Copy className="w-4 h-4 text-paper-dim group-hover:text-brass transition-colors" />
          )}
        </button>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[.15em] text-paper-dim">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="social-link hover:text-paper" data-cursor="link">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between gap-4 pt-6 border-t border-line font-mono text-[10px] uppercase tracking-wider text-paper-dim">
        <p>© 2026 Wesley Wong. All rights reserved.</p>
        <p>Design &amp; Built with Wesley Wong. in Taiwan.</p>
      </div>
    </footer>
  );
}
