/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {},
    extend: {
      colors: {
        darkBlue: "hsl(218, 44%, 22%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        lightGray: "hsl(212, 45%, 89%)",
      },
    },
  },
  plugins: [],
};

// - White: hsl(0, 0%, 100%)
// - Light gray: hsl(212, 45%, 89%)
// - Grayish blue: hsl(220, 15%, 55%)
// - Dark blue: hsl(218, 44%, 22%)
