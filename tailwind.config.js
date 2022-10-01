/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("first", "& > :first-child");
      addVariant("last", "& > :last-child");
      addVariant("not-last", "& > :not(:last-child)");
      addVariant("not-first", "& > :not(:first-child)");
      addVariant("odd", "& > :nth-child(odd)");
      addVariant("even", "& > :nth-child(even)");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
