/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f14',
        paper: '#ffffff',
        moss: '#2563eb',
        ember: '#22d3ee',
        ocean: '#0ea5e9',
        mist: '#f6f8fb',
        slate: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(11, 15, 20, 0.13)',
        glow: '0 24px 80px rgba(14, 165, 233, 0.22)',
      },
    },
  },
  plugins: [],
};
