/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1fa",
          100: "#dbe1f4",
          400: "#3d4f9e",
          600: "#26326b",
          700: "#1e2761",
          800: "#161c47",
          900: "#0f1330",
        },
        saffron: {
          400: "#ff9f43",
          500: "#f2872e",
          600: "#dd6b1a",
        },
        teal: {
          400: "#1fa8a0",
          500: "#1c7293",
        },
      },
      fontFamily: {
        display: ["Cambria", "Georgia", "serif"],
        body: ["Inter", "Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
