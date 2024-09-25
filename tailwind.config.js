// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7043',        // Updated to a softer orange
        'primary-dark': '#FF5722', // Kept the darker orange but reduced harshness
        accent: '#0078D4',          // New accent color for contrast (teal/blue)
        'accent-light': '#6AB0FF',  // Alternative accent color
        background: {
          light: '#FFF5EC',        // Soft cream for light mode
          dark: '#121212',         // Deep gray for dark mode
        },
        text: {
          light: '#3D2B00',        // Deep brown for light mode
          dark: '#E0E0E0',         // Off-white for dark mode
        },
      },
    },
    darkMode: 'class', // Ensure dark mode is enabled via class
  },
  plugins: [],
};