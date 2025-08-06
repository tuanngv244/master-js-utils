/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // This means "only screens 320px and smaller"
        "max-xs": { max: "399px" }, // Add this for
        "3xl": "1800px",
      },
      colors: {
        grey: {
          50: "#f6f6f6",
          100: "#eeeeee",
          200: "#fbfbfc",
          500: "#757575",
          600: "#545454",
          800: "#1F1F1F",
          900: "#141414",
        },
        nd: {
          600: "#6f77da",
        },
        primary: {
          500: "#181D62", // Your main primary color
        },
        gray: {
          50: "#f6f6f6",
          100: "#F8FAFC",
          200: "#E2E2E2",
          400: "#AFAFAF",
          800: "#1F1F1F",
          900: "#141414",
        },
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
