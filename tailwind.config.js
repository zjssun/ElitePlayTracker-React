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
        "shadow-color":"rgba(var(--shadow-color))",
        "secondary-background":"rgba(var(--secondary-background))",
        "navlink-border-color":"rgba(var(--navlink-border-color))",
        "navlink-hover-color":"rgba(var(--navlink-hover-color))",
        "navlink-img-bg":"rgba(var(--navlink-img-bg))",
        "select-color":"rgba(var(--navlink-select-color))",
        "dark-hover-color":"rgba(var(--dark-hover-color))",
        "year-color":"rgba(var(--year-color))",
        "card-bg-color":"rgba(var(--card-bg-color))",
        "card-border-color":"rgba(var(--card-border-color))",
      },
    },
  },
  plugins: [],
}
