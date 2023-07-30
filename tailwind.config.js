/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        30: "30px",
        "10px": "10px",
        "70vh": "70vh",
        "496px": "496px",
        "60px": "60px",
      },
      borderRadius: {
        100: "100px",
      },
      colors: {
        "cash-gray": "#B6B6B6",
      },
    },
  },
  plugins: [],
};
