/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f2',
          100: '#dde9e2',
          200: '#bdd5c7',
          600: '#27523e',
          700: '#1e4031',
          800: '#1B382B', // primary
          900: '#142a20',
          950: '#0b1812',
        },
        linen: '#FDFBF7',
        cream: {
          50: '#fdfbf7',
          100: '#f7f4ec',
          200: '#eee7d9',
          300: '#dfd2bc',
        },
        nut: {
          DEFAULT: '#D49B44',
          light: '#e5b66d',
          dark: '#b67e2b',
        },
        terracotta: {
          DEFAULT: '#C86446',
          light: '#da8167',
          dark: '#a84c32',
        },
        espresso: {
          DEFAULT: '#1A1615',
          light: '#2d2726',
          muted: '#5a5250',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 56, 43, 0.08), 0 0 1px 1px rgba(27, 56, 43, 0.04)',
        'luxury-hover': '0 25px 50px -12px rgba(27, 56, 43, 0.16), 0 0 1px 1px rgba(212, 155, 68, 0.2)',
      }
    },
  },
  plugins: [],
}
