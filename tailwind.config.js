/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        accent: '#22d3ee',
        pulse: '#a78bfa'
      },
      boxShadow: {
        panel: '0 10px 40px rgba(15, 23, 42, 0.35)'
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseglow: 'pulseglow 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseglow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
