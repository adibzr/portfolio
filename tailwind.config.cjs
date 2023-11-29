/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    
    extend: {
      fontFamily: { inter: ["inter", "serif"] },
      boxShadow: {
        introButton: "inset 400px 0 0 0 rgb(34 197 94)",
      },
      backgroundImage: {
        "background": "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
