/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#D99904",
      },
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
