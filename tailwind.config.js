module.exports = {
  mode:'jit',
  purge:['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,tsx}'],
  darkMode:false,
  content: [],
  theme: {
    extend: {},
  },
  variants:{
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
