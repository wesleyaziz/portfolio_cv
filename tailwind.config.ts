import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0d",
        "ink-2": "#141416",
        paper: "#f3efe6",
        "paper-dim": "#9a968c",
        brass: "#c9a869",
        glacier: "#9fd8d6",
        line: "#2a2a2c",
      },
      fontFamily: {
        // Set from next/font in app/layout.tsx via CSS variables.
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        pulse: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
