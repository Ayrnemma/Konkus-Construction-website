/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1B22',
          50:  '#EEEDF2',
          100: '#DDDBE5',
          200: '#BBB7CB',
          300: '#9994B1',
          400: '#777197',
          500: '#56507A',
          600: '#3E3C5A',
          700: '#2A2933',
          800: '#1C1B22',
          900: '#0F0E12',
        },
        gold: {
          DEFAULT: '#9B7535',
          50:  '#FDF8EF',
          100: '#F5E9CC',
          200: '#EBD299',
          300: '#E0BB66',
          400: '#D6A433',
          500: '#C4924A',
          600: '#9B7535',
          700: '#7A5D29',
          800: '#59441E',
          900: '#382B12',
          light: '#C4924A',
        },
        cream: {
          DEFAULT: '#F8F6F3',
          dark: '#EEE9E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        'gold-sm':  '0 2px 12px rgba(155,117,53,0.20)',
        'gold':     '0 4px 24px rgba(155,117,53,0.30)',
        'gold-lg':  '0 8px 48px rgba(155,117,53,0.40)',
        'dark-sm':  '0 2px 16px rgba(28,27,34,0.08)',
        'dark':     '0 4px 32px rgba(28,27,34,0.12)',
        'dark-lg':  '0 12px 64px rgba(28,27,34,0.18)',
        'dark-xl':  '0 24px 80px rgba(28,27,34,0.24)',
      },
      animation: {
        'fade-up':   'fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':   'fadeIn  0.5s ease-out forwards',
        'shimmer':   'shimmer 2s infinite',
        'float':     'float   3.5s ease-in-out infinite',
        'pulse-gold':'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(155,117,53,0)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(155,117,53,0.12)' },
        },
      },
    },
  },
  plugins: [],
};
