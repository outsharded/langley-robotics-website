import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kida': ['BD_Plakatbau', 'sans-serif'],
        'okcomputer': ['Microgramma', 'sans-serif'],
        'avenir': ['avenir', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        powercut_yellow:'#F5C249',
        powercut_pink:'#FF5757',
        powercut_pink_contrast: '#FF6B6B',
        dark_bg_box: '#0a0a0a',
      }
    },
  },
  plugins: [],
};
export default config;

