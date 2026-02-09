/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hackathon-cream': '#FFF7ED',
        'hackathon-coral': '#FCA5A5',
        'hackathon-crimson': '#9F1239',
        'hackathon-gray': '#6B7280',
      },
    },
  },
  plugins: [],
}
