// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        styled: ['styledFont', 'sans-serif'], // Add your custom font here
        montserrat: ['Montserrat', 'sans-serif'], // Add your custom font here
        poppins: ['Poppins', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
