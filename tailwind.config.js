// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EED5BA',        // Updated primary color for light mode
        background: {
          light: '#FFF5EC',        // Soft cream for light mode
          dark: '#2E3640',         // Updated primary color for dark mode
        },
        text: {
          light: '#3D2B00',        // Deep brown for light mode
          dark: '#E0E0E0',         // Off-white for dark mode
        },
        // Removed secondary, accent, and other colors to simplify the palette
      },
    },
    darkMode: 'class', // Ensure dark mode is enabled via class
  },
  plugins: [],
};