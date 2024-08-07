/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sm8-blue": {
          50: "#f3f7fc",
          100: "#e6f0f8",
          200: "#c7dff0",
          300: "#96c5e3",
          400: "#5ea7d2",
          500: "#3a8cbd",
          600: "#266793",
          700: "#235a81",
          800: "#204c6c",
          900: "#20415a",
          950: "#152a3c",
        },
      },
    },
  },
  plugins: [],
};
