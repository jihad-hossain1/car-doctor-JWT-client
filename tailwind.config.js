/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffbfc0",

          "secondary": "#beb3f9",

          "accent": "#76fc8a",

          "neutral": "#2B2136",

          "base-100": "#FCFCFD",

          "info": "#5F8EEC",

          "success": "#13713F",

          "warning": "#FF3811",

          "error": "#E0485C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}