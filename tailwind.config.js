/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      fontSize: {
        lg: "1.0625rem", //17px
        xl: "1.3125rem", //21px
        "2xl": "1.5rem", //24px
        "3xl": "1.75rem", //28px
        "4xl": "2rem", //32px
        "5xl": "2.5rem", //40px
        "6xl": "3.5rem", //56px
        "7xl": "4rem", //64px
        "8xl": "5rem", //80px
      },
      colors: {
        blue: "#0071e3",
        white: "#f5f5f7",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#2e2e30",
        },
        orange: {
          DEFAULT: "#b38a6e",
          100: "#c8c2bd",
        },
        zinc: "#101010",
      },
      keyframes: {
        fadeAnimation: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
