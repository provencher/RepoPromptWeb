// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8A65',        // Changed to a softer, more muted orange
        secondary: '#42A5F5',      // Complementary light blue shade
        'primary-dark': '#FF5722', // Kept the darker orange for dark mode
        accent: '#0078D4',          // New accent color for contrast (teal/blue)
        'accent-light': '#80D8FF',  // Lighter accent color for additional contrast
        background: {
          light: '#FFF5EC',        // Soft cream for light mode
          dark: '#1E1E1E',         // Dark gray for dark mode
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