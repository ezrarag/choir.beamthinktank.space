/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6ea',
          100: '#f3eacc',
          500: '#c5a059',
          600: '#a8823b',
          700: '#826227',
          900: '#3f0c1a',
        },
        accent: {
          50: '#fdfbf7',
          100: '#fae8ff',
          500: '#d4af37',
          600: '#c5a059',
          700: '#a8823b',
        },
        theatre: {
          dark: {
            950: '#09070b',
            900: '#110c14',
            850: '#18111c',
            800: '#221727',
            700: '#302138',
            600: '#432f4e',
          },
          gold: {
            50: '#fbf9f1',
            100: '#f5efdb',
            200: '#ebdeaf',
            300: '#dfcb80',
            400: '#d4af37',
            500: '#c5a059',
            600: '#a6823c',
            700: '#816327',
            800: '#5a4317',
          },
          burgundy: {
            950: '#1a050b',
            900: '#280710',
            800: '#3e0c1a',
            700: '#5c1328',
            600: '#7e1d38',
          },
          parchment: {
            50: '#fdfcf9',
            100: '#f8f4ec',
            200: '#eee5d5',
            300: '#ddd0ba',
            400: '#b8a78e',
            500: '#94836a',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
