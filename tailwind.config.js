/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      fontFamily: {
        cuprum: ['Cuprum', 'sans-serif'],
        maitree: ['Maitree', 'serif'],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')({ strategy: 'base' })],
};
