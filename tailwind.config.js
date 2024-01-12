/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 2px 6px 0px rgba(26, 24, 30, 0.04)',
      }
    },
  },
  plugins: [],
}