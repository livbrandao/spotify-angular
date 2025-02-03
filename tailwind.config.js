module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1db954",
        "spotify-black": "#121212",
        "spotify-gray": "#b3b3b3",
        "spotify-light-black": "#242424",
        "spotify-hover": "#252525",
        "spotify-border": "#878787",
        "spotify-whithe": "#fff",
        "bg-icon": "#131313",
        "bg-arrow-color": "rgba(0, 0, 0, 7)",
      },
      spacing: {
        "sidebar-width": "300px",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
