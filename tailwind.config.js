/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#b45309', // amber-700
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};