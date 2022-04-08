module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "palette-dark": "#132C33",
        "palette-teal": "#126E82",
        "palette-lightblue": "#51C4D3",
        "palette-lightgray": "#D8E3E7"
      },
      fontFamily:{
        "neue":['"Bebas Neue"', 'cursive'],
        "josefina":['"Josefin Sans"', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
