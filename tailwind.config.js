/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#040420",
        "secondary-bg": "#090d34",
        "main-text": "#ECE4EF",
        "secondary-text": "#a5a5a5",
        "accent": "#FFFE00",
      }
    },
  },
  plugins: [],
}

