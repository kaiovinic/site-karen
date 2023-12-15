/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mentoria01: "url('/public/mentorias/mentoria01.jpg')",
        mentoria02: "url('/public/mentorias/mentoria02.jpg')",
        mentoria03: "url('/public/mentorias/mentoria03.jpg')",
        mentoria04: "url('/public/mentorias/mentoria04.jpg')",
      },
    },
  },
  plugins: [],
};
