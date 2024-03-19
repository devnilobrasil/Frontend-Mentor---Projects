/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./style.css", "./index.html"],
   theme: {
      extend: {},
      container: {
         center: true,
      },
      colors: {
         yellow: "hsl(47, 88%, 63%)",
         white: "hsl(0, 0%, 100%)",
         black: "hsl(0, 0%, 7%)",
         grey: "hsl( 0, 0%, 50% )",
      },
      screens: {
         mobile: "375px",
         desktop: "1440px",
      },
      fontSize: {
         super_xs: ".6em",
         xs: ".75rem", // 12px
         sm: ".875rem", // 14px
         tiny: ".9375rem", // 14/16*9=13.563
         base: "1rem", // 16px
         lg: "1.25rem", // 19.2px
         xl: "1.5rem", // 24px
      },
      fontFamily: {
         fig: ["Figtree", "sans-serif"],
      },
      boxShadow: {
         "3xl": " 7px 7px 2px rgba(0, 0, 0, 1)",
      },
      plugins: [],
   },
}
