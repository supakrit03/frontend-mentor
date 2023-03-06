/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(218, 44%, 22%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        lightGray: "hsl(212, 45%, 89%)",

        // - Light red: hsl(0, 100%, 67%)
        // - Orangey yellow: hsl(39, 100%, 56%)
        // - Green teal: hsl(166, 100%, 37%)
        // - Cobalt blue: hsl(234, 85%, 45%)
        lightRed: {
          DEFAULT: "hsl(0, 100%, 67%)",
          soft: "hsl(0, 100%, 97%)",
        },
        orangeyYellow: {
          DEFAULT: "hsl(39, 100%, 56%)",
          soft: "hsl(39, 100%, 97%)",
        },
        greenTeal: {
          DEFAULT: "hsl(166, 100%, 37%)",
          soft: "hsl(166, 100%, 97%)",
        },
        cobaltBlue: {
          DEFAULT: "hsl(234, 85%, 45%)",
          soft: "hsl(234, 85%, 97%)",
        },
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif",
        hankenGrotesk: "'Hanken Grotesk' , sans-serif",
      },
    },
  },
  plugins: [],
};

// - White: hsl(0, 0%, 100%)
// - Light gray: hsl(212, 45%, 89%)
// - Grayish blue: hsl(220, 15%, 55%)
// - Dark blue: hsl(218, 44%, 22%)
