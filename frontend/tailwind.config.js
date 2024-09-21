/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' }, // You can customize the blink color
        },
      },
      animation: {
        typing: 'typing 1s steps(20) 1s 1 normal both, blink 0.75s step-end infinite',
      },
      backgroundImage: {
        "parallax": 'url("./public/cover.jpg")',
      }
    },
  },
  plugins: [],
}

