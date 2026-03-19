/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka_400Regular"],
        "fredoka-light": ["Fredoka_300Light"],
        "fredoka-medium": ["Fredoka_500Medium"],
        "fredoka-semibold": ["Fredoka_600SemiBold"],
        "fredoka-bold": ["Fredoka_700Bold"],
      },
    },
  },
  plugins: [],
};
