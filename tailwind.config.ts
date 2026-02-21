import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          tertiary: "var(--color-bg-tertiary)",
          glass: "var(--color-bg-glass)",
        },
        surface: "var(--color-surface)",
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverse: "var(--color-text-inverse)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          dim: "var(--color-accent-dim)",
          glow: "var(--color-accent-glow)",
          subtle: "var(--color-accent-subtle)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        patent: "var(--color-patent)",
        research: "var(--color-research)",
        rakshak: "var(--color-rakshak)",
        iris: "var(--color-iris)",
        urban: "var(--color-urban)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display": ["80px", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-mobile": ["42px", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" }],
        "h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "h1-mobile": ["36px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "h2": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h2-mobile": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3-mobile": ["20px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h4": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "stat": ["48px", { lineHeight: "1", fontWeight: "700" }],
        "stat-mobile": ["32px", { lineHeight: "1", fontWeight: "700" }],
        "label": ["11px", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "400" }],
      },
      spacing: {
        "18": "72px",
        "22": "88px",
        "26": "104px",
        "30": "120px",
        "34": "136px",
        "38": "152px",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        glow: "var(--glow-accent)",
        "glow-strong": "var(--glow-accent-strong)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "in-expo": "var(--ease-in-expo)",
        "spring": "var(--ease-spring)",
      },
      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
        slowest: "var(--duration-slowest)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s var(--ease-out-expo) both",
        "fade-in-left": "fade-in-left 0.6s var(--ease-out-expo) both",
        "fade-in-right": "fade-in-right 0.6s var(--ease-out-expo) both",
        "scale-in": "scale-in 0.5s var(--ease-spring) both",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
