/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        flower: ["Fleur De Leah"],
        gv: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
