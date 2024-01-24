import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        p: "240px",
        d: "1024px",
      },
      fontFamily: {
        //system font
        LexendDeca: ["Lexend Deca", "sans-serif"],

        //custom font
      },

      colors: {
        //system color
        adminOrange: "#ffb301",

        //custom color
        mainColor: "#38761D",
        mainColorHover: "#b20032",
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
