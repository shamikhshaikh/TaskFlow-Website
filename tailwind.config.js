/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
  animation: {
    'slow-pulse': 'pulse 8s ease-in-out infinite',
  }
}

}
