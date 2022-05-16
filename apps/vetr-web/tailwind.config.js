const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      ...colors,
      brand: {
        DEFAULT: "#121212",
        50: "#6E6E6E",
        100: "#646464",
        200: "#4F4F4F",
        300: "#3B3B3B",
        400: "#262626",
        500: "#121212",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      // brand: {
      //   DEFAULT: "#FF6740",
      //   50: "#ff103104",
      //   100: "#fff3f0",
      //   200: "#ffcec2",
      //   300: "#ffad99",
      //   400: "#ff896b",
      //   500: "#ff6842",
      //   600: "#fa3200",
      //   700: "#b82500",
      //   800: "#751700",
      //   900: "#330a00",
      // },
    },
    extend: {
      ringOffsetWidth: {
        3: "3px",
      },
      ringWidth: {
        3: "3px",
      },
      objectPosition: {
        manga: "50% 25%",
      },
      borderWidth: {
        3: "3px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
      },
      spacing: {
        128: "32rem",
        108: "27rem",
      },
    },
  },
};
