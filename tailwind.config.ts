import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "#00629b",
        primaryDark: "#00273e",
        wieLight: "#702f8a",
        wieDark: "#7e22ce",
        csLight: "#ffa300",
        csDark: "#f97316",
        sightLight: "#ba0c2f",
        sightDark: "#a50b2aff",
        grey: "#333333",
        blue: "#00629B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
