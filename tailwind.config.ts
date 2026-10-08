import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          green: "#e0f2e9",
          greenDark: "#a7d7c5",
          greenLight: "#f4fbf7",
          text: "#2c5f46"
        }
      }
    },
  },
  plugins: [],
};
export default config;
