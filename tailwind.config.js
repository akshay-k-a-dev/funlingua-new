/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F58220',
        'primary-purple': '#6A1B9A',
        'soft-lilac': '#EDE7F6',
        'warm-light-orange': '#FFE0B2',
        'black': '#000000',
        'charcoal-gray': '#333333',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};