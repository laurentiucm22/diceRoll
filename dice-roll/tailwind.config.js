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
    },
  },
  plugins: [],
};
