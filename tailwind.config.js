/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111418',
        paper: '#f4efe6',
        moss: '#2f6f5e',
        ember: '#d9674e',
        ocean: '#1f6f8b',
        mist: '#d9e4df',
        slate: '#23313a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 20, 24, 0.13)',
      },
    },
  },
  plugins: [],
};
