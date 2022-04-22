module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    letterSpacing: {
      tight: '-0.15px',
    },
    extend: {
      height: {
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
};