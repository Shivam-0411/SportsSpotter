/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./src/**/*.{js,jsx,ts,tsx}"
    ],
    "theme": {
          "extend": {
                "colors": {
                      "dimgray": "rgba(83, 83, 83, 0.2)",
                      "white": "#fff",
                      "gainsboro": "rgba(217, 217, 217, 0.08)"
                },
                "spacing": {},
                "fontFamily": {
                Poppins: ['Poppins', 'sans-serif'],
                },
          }
    },
    "corePlugins": {
          "preflight": false
    }
}