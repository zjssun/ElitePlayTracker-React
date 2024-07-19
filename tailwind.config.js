/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"rgba(var(--background))",
        text:"rgba(var(--text))",
        "border-color":"rgba(var(--border-color))",
        "shadow-color":"rgba(var(--shadow-color))"
      },
    },
  },
  plugins: [],
}
