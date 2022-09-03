module.exports = {
  mode: "jit",
  content: ["./src/html/*.html", "/src/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["lines-in-motion", "lips", "bank-note", "yyy", "circuit-board"],
      colors: {
        default: "#EAD2AC",
      },
      opacity: {
        default: "1.0",
        low: "0.05",
      },
    }),
  ],
};
