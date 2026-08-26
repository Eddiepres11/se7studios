/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'se7-black': '#0a0a0a',
        'se7-dark': '#141414',
        'se7-gray': '#737373',
        'se7-light': '#f5f5f5',
        'se7-white': '#ffffff',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      fontSize: {
        'fluid-hero': 'clamp(3.5rem, 8vw, 9rem)',
        'fluid-h2': 'clamp(2.5rem, 5vw, 5rem)',
        'fluid-h3': 'clamp(1.5rem, 3vw, 3rem)',
        'fluid-massive': 'clamp(4rem, 20vw, 24rem)',
      },
      spacing: {
        'site-x': 'clamp(1.5rem, 4vw, 4rem)',
        'section-y': 'clamp(5rem, 10vw, 10rem)',
      },
      animation: {
        'blob-spin': 'blobSpin 20s linear infinite',
        'blob-bounce': 'blobBounce 10s ease-in-out infinite alternate',
      },
      keyframes: {
        blobSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blobBounce: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-5%, 5%) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
