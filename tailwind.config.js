/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071016',
        paper: '#f8fafc',
        moss: '#1d4ed8',
        ember: '#38bdf8',
        ocean: '#0284c7',
        mist: '#101820',
        slate: '#0b1220',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(0, 0, 0, 0.28)',
        glow: '0 24px 80px rgba(56, 189, 248, 0.18)',
      },
    },
  },
  plugins: [],
};
