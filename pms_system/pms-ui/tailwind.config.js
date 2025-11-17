/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/index.html",
  ],
  prefix: "ef-",
  theme: {
    screens: {
      "sm": "300px",
      "md": "600px",
      "lg": "800px",
      "xl": "1200px",
      "2xl": "2000px",
      "-sm": { "max": "299.9999px" },
      "-md": { "max": "599.9999px" },
      "-lg": { "max": "799.9999px" },
      "-xl": { "max": "1199.9999px" },
      "-2xl": { "max": "1999.9999px" },
    },
    container: {},
    extend: {},
  },
};
