module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        accent: '#B8E986',
        background: '#F5F7FA',
        foreground: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
