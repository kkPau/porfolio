/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", './index.html'],
  theme: {
    extend: {
      textColor: {
        primary: '#EF233C',
      },
      backgroundColor: {
        primary: '#EF233C',
        secondary: '#2B2D42',
        blackOverlay: 'rgba(0, 0 ,0 ,0.8)',
        projectOpaque: 'rgba(20, 20, 20, 0.8)'
      },
      boxShadow: {
        hero:'5px 5px 5px cyan'
      },
    },
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"]
    }
  },
  plugins: [],
}

