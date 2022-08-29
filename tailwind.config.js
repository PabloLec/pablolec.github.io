module.exports = {
  mode: "jit",
  content: ["./src/html/*.html", "/src/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["lines-in-motion", "lips", "bank-note", "circuit-board", "signal", "yyy"],
      colors: {
        default: "#EAD2AC",
      },
      opacity: {
        default: "1.0",
      },
    }),
  ],
};
