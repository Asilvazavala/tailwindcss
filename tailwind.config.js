/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "haken": ['"Hanken Grotesk"', 'sans-serif']
      },
      colors: {
        "orange-light": "rgb(249, 155, 125)",
        "maroon": "rgb(231, 97, 97)",
        "red-maroon": "rgb(176, 71, 89)",
        "teal": "rgb(139, 172, 170)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsl(241, 72%, 46%, 0)",
        "light-red": "hsl(0, 100%, 67%)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-lavander": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      }
    },
  },
  plugins: [],
}

