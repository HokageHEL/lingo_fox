/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ["Pixelify Sans", "sans-serif"],
      },
      boxShadow: {
        pixel: "6px 6px 0px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
