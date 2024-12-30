/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#D99904",
        darkOne: "#151515",
        darkTwo: "#444444",
        darkThree: "#737373",
      },
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
