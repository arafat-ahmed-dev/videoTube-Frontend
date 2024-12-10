/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        dark: '#0A1628',
        'gray': {
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        'blue': {
          300: '#63B3ED',
          400: '#4299E1',
          500: '#0066FF',
          600: '#2B6CB0',
        }
      },
      scale: {
        '102': '1.02',
      },
      screens: {
        'xs': '375px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
