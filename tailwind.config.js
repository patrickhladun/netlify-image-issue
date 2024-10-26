/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.9375rem',
        base: '1.12rem',
        lg: '1.25rem',
        display: '3.5rem',
        h1: '2.625rem',
        h2: '2.1875rem',
        h3: '1.8125rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1.0625rem',
        'display-sm': '2.5rem',
        'h1-sm': '2.125rem',
        'h2-sm': '1.8125rem',
        'h3-sm': '1.5rem',
        'h4-sm': '1.25rem',
        'h5-sm': '1rem',
        'h6-sm': '0.875rem',
      },
      spacing: {
        xxs: '0.125rem',
        xs: '2rem',
        sm: '4rem',
        rg: '6rem',
        md: '8rem',
        lg: '12rem',
        xl: '16.25rem',
      },
    },
  },
  plugins: [],
};
