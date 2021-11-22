module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
        '30v': '30vh',
      },
      margin: {
        'lg': '24px',
        'xl': '48px'
      },
      backgroundImage: {
        'something-great': "url(https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
