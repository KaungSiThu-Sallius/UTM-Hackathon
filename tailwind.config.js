/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme beige palette
        'hackathon-beige': '#FDF6EE',
        'hackathon-parchment': '#F5E6D3',
        'hackathon-warmtan': '#E8D5BC',
        // Primary accent — wine red
        'hackathon-wine': '#7C1D2E',
        'hackathon-crimson': '#9F1239',
        'hackathon-blush': '#C97B8A',
        // Legacy compat
        'hackathon-cream': '#FDF6EE',
        'hackathon-coral': '#B33A52',
        'hackathon-gray': '#5C4A3E',
      },
    },
  },
  plugins: [],
}
