/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "var(--primary-color)",
        tertiary_color: "var(--tertiary_color)",
        bg_primary: "var(--bg-primary)",
        bg_secondary: "var(--bg-secondary)",
        bg_tertiary: "var(--bg-tertiary)",
        text_color: "var(--text-color)",
        heading_color: "var(--heading-color)",
        subTitle_color: "var(--subTitle-color)",
        bg_cover: "var(--bg-cover)",

        /* shades */

        gray_500: "var(--gray-500)",
        gray_400: "var(--gray-400)",
        gray_300: "var(--gray-300)",
        gray_200: "var(--gray-200)",
        gray_100: "var(--gray-100)",

        black_500: "var(--black-500)",
        black_400: "var(--black-400)",
        black_300: "var(--black-300)",
        black_200: "var(--black-200)",
        black_100: "var(--black-100)",
      },

      spacing: {
        paddingX: "1.5rem",
        section: "80px",
      },
      // screens: {
      //   lg: "992px",
      //   // => @media (min-width: 992px) { ... }
      // },

      container: {
        center: true,
        screens: {
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};