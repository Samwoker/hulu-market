/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // <-- for app router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // optional if you still have pages
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: ["var(--theme-font)"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        success: "var(--success-color)",
        info: "var(--info-color)",
        warning: "var(--warning-color)",
        danger: "var(--danger-color)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
