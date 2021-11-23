module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      height: {
        500: "500px",
        "30v": "30vh",
      },
      margin: {
        lg: "24px",
        xl: "48px",
      },
      backgroundImage: {
        "something-great":
          "url(https://i.pinimg.com/originals/c6/dd/7b/c6dd7b83d53b530167225bc2ad994fa7.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
