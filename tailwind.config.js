module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1db954",
        "spotify-black": "#121212",
        "spotify-gray": "#b3b3b3",
        "spotify-light-black": "#242424",
        "spotify-hover": "#252525",
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
