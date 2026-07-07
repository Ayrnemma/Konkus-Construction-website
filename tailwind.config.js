/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#2E2D38',
          50: '#EEEDF2',
          100: '#DDDBE5',
          200: '#BBB8CB',
          300: '#9994B1',
          400: '#777197',
          500: '#565079',
          600: '#3E3C5A',
          700: '#2E2D38',
          800: '#1E1D25',
          900: '#0F0E12',
        },
        gold: {
          DEFAULT: '#9B7535',
          50: '#FDF8F0',
          100: '#F5E8CC',
          200: '#EBD099',
          300: '#E0B866',
          400: '#D6A033',
          500: '#C4924A',
          600: '#9B7535',
          700: '#7A5C2A',
          800: '#59431F',
          900: '#382A14',
        },
        wood: {
          DEFAULT: '#C4924A',
          light: '#D4A862',
          dark: '#A67A38',
        },
        cream: {
          DEFAULT: '#F8F6F3',
          dark: '#EEE9E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(46, 45, 56, 0.08)',
        'premium-lg': '0 8px 48px rgba(46, 45, 56, 0.12)',
        'gold': '0 4px 24px rgba(155, 117, 53, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom right, rgba(46,45,56,0.85) 0%, rgba(46,45,56,0.6) 50%, rgba(155,117,53,0.3) 100%)',
      },
    },
  },
  plugins: [],
};
