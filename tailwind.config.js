/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins"],
      },
      colors: {
        primary: "#e25651",
        secondary: "#473753",
      },
    },
  },
  plugins: [],
};
