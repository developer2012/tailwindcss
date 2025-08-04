 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{html,js}"],
   theme: {
    backgroundImage: {
      heroBg: ["url('/images/hero-bg.png')"]
    },
    fontFamily:{
      fireSans: ["Fira Sans", "sans-serif"]
    },
     extend: {},
   },
   plugins: [],
 }