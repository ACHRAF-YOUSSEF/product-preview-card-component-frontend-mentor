/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Dark-cyan": "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        "Very-dark-blue": "hsl(212, 21%, 14%)",
        "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
