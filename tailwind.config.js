module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        body: ["SegoeUI-regular"],
        desc: ["SegoeUI-light"],
        title: ["SegoeUI-bold"],
      },
      colors: {
        note: "#F94671",
        body: "#0c0505",
        primary: "#86ABF9",
        secondary: "#6F5CF1",
      },
    },
  },
  plugins: [],
};
