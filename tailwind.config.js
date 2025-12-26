/** @type {import('tailwindcss').Config} */
export default {
  // Use attribute-based dark mode so Tailwind's `dark:` classes
  // follow the theme set by ThemeProvider (data-theme="dark").
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
