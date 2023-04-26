/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(8)",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "7ch" },
        },
      },
      fontFamily: {
        moulFont: ["Moul"],
        serifFont: ["Noto Serif Kannada"],
      },
    },
    plugins: [],
  },
};

// infinite alternate both <-- try for the typing text animation
