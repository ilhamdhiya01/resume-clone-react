/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      dropShadow: {
        'custom': [
          '0 0 10px #f5f6fa',
          '0 0 100px #f5f6fa'
        ],
      },
      boxShadow: {
        custom: 'rgba(245, 246, 250) 0px 0px 0px 3px,  0 0 10px #f5f6fa',
        customImg: 'rgba(245, 246, 250) 0px 0px 0px 3px,  0 0 10px #f5f6fa',
        lightBorder: 'rgba(255, 255, 255) 0px 1px 2px 0px, rgba(255, 255, 255) 0px 2px 6px 2px'
      },
      backgroundImage: theme => ({
        'steve-jobs': "url('/quote/assets/stevejobs.png')",
      }),
    },
  },
  plugins: [],
}
