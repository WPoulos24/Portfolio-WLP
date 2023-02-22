module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: {
        DEFAULT: "#3C4048",
      },
      white: {
        DEFAULT: "#EAEAEA",
      },
      green: {
        DEFAULT: "#B2B2B2",
      },
      gray: {
        DEFAULT: "#60432F",
        light: "#B2B2B2",
      },
      purple: {
        DEFAULT: "#00ABB3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
