/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Blue
        darkBlue: '#003A70', // Dark Blue
        lightGray: '#F5F5F5', // Light Gray
        mediumGray: '#E0E0E0', // Medium Gray
        green: '#5EBE7E', // Green
        orange: '#FFA500', // Orange
        red: '#D9534F', // Red
        darkGray: '#333333', // Dark Gray
        lightTextGray: '#B0B0B0', // Light Gray
      },
      spacing: {
        '18': '4.5rem', // Custom spacing example
        '22': '5.5rem', // Custom spacing example
      },
      borderRadius: {
        'md': '0.375rem', // Custom border radius
      },
    },
  },
  plugins: [],
};
