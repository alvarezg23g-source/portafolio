/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1115',
        paper: '#ffffff',
        moss: '#3f3f46',
        ember: '#52525b',
        ocean: '#18181b',
        mist: '#f4f4f5',
        slate: '#18181b',
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
