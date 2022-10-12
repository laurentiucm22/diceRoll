/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "burger-menu": "#c084fc",
        "nav-links": "#c084fc",
        "nav-social-media": "#c084fc",
        "nav-text": "#f3f4f6",
      },
      backgroundImage: {
        "app-cover": "url(./assets/images/background/appcover.jpg)",
      },
      animation: {
        pulse: "pulse 4s infinite;",
      },
      keyframes: {
        pulse: {
          "0%": { boxShadow: " 0 0 0 0px rgba(0, 0, 0, 0.2)" },
          "100%": { boxShadow: " 0 0 0 20px rgba(0, 0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
