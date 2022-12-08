/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('img/bg.jpg')",
      },
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
