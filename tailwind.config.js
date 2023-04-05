/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'dark': '#303234',
        'yellow': '#eccba3',
        'pink': '#f48b8b',
        'blue': '#38baa6',
      },
      fontFamily: {
        Caveat: ['"Caveat", "cursive"'],
        DynaPuff: ['"DynaPuff", "cursive"'],
        Gochi: ['"Gochi Hand", "cursive"'],
        Quicksand: ['"Quicksand", "sans-serif"']
      },
    },
  },
  plugins: [],
}
