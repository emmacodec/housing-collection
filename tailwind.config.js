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
    container: {
      padding: {
        default: '1rem',
        lg: '2rem',
      },
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
      boxShadow: {
      1: '0px 4px 30px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

