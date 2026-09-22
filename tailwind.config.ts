import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-navy": "#344B7F",
        "brand-navy-dark": "#0E1A33",
        "brand-orange": "#EF7F2D",
        "brand-green": "#009A3C",
        "brand-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
