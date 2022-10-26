const formKitTailwind = require("@formkit/themes/tailwindcss");
const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // Remplacer tous les breakpoints du projet 
    screens: {
      'sm': '640px',
      'md' : '768px',
      'lg': '1024',
      'xl' : '1280'
    },
    extend: {
      
      backgroundImage: {
        'fond': "url('img/fond.jpg')"
      },

      colors: {
        "cadre": "#7E9BA1",
        "blanc": "#FFFFFF",
        "orange": "#EE4F2C",
        "gris_clair": "#D9D9D9",
        "gris_transparant": "#E3E3E3",
        "noir": "#000000",
        "marron_clair": "#A79393",
        "Fond": "#ECF2F3",
        "gris_fonce": "#565A5F",
        "vert1": "#7E9BA1",
        "vert2": "#85B4A6",
        "vert3": "#91AD80",
        "rose1": "#A482AF",
        "jaune1": "#C0B598",
        "rouge_pale": "#DE8484"
      },
      fontFamily: {
        "Titreh1": "font-JosefinSans font-[700] text-[84px] ",
        "text": "font-JosefinSans font-[400] text-[24px] ",
        "boutonmenu": "font-JosefinSans font-[400] text-[24px] ",
        "text_mini_menu": "font-JosefinSans font-[300] text-[24px] ",
        "Titreh2": "font-JosefinSans font-[500] text-[80px] ",
        "boutonlien": "font-JosefinSans font-[400] text-[24px] ",
        "Titreh3": "font-JosefinSans font-[500] text-[41px] "
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
