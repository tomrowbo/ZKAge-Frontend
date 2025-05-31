/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcdbff',
          300: '#8fc4ff',
          400: '#59a2ff',
          500: '#3483ff',
          600: '#1a61f5',
          700: '#1650e3',
          800: '#1a42b8',
          900: '#1c398d',
          950: '#162353',
        },
        secondary: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d6',
          300: '#86efb9',
          400: '#4ade8b',
          500: '#22c565',
          600: '#16a050',
          700: '#167f45',
          800: '#18633a',
          900: '#165232',
          950: '#082f1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} 