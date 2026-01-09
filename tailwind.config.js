export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4731D3", // Hero Blue / Profile BG
        secondary: "#CBF281", // Hero Green / Projects BG
        accent: "#CBF281", // Same as secondary
        "hero-right": "#CBF281",
        "project-bg": "#CBF281",
        "footer-bg": "#F9F9F9",
        "dark-text": "#120B39", // Contact text
        "grey-text": "#777777", // Skills text
        "project-title": "#4338CA", // Workintech title
        "project-desc": "#383838",

        // Dark Mode Colors
        "dark-bg": "#252128",       // Main background for dark mode (replaces white)
        "dark-card": "#171043",     // Card background in dark mode
        "dark-text-primary": "#FFFFFF",
        "dark-text-secondary": "#CBF281",
      },
      borderRadius: {
        "xl": "20px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
