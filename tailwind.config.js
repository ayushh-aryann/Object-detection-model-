/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        didot: ['Didot', 'serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        kulhachat: ['KULHACHAT HC', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};