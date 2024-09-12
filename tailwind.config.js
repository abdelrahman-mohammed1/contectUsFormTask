/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      custom: ['Karla', 'sans-serif'],
    }
  },
};
export const plugins = [];
