/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    
    screens: {
      sm: '640px',
      md: '768',
      lg: '1024',
      xl: '1234',
    },
    extend: {
      colors: {
      primary: '#101828',
      secondary: '#7f56D0',
      },
      },
  },
  plugins: [],
};

