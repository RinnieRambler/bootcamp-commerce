module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    // Le Monde 400 - subtitles 
    fontFamily: {
      'lemonde': ['lemonde-courrier', 'serif'],
      'anchorage': ['AnchorageRegular', 'sans-serif'],
      
    },
    extend: {
        backgroundPosition: {
        '3/4-top':'25% top',
      },
      spacing: {
        '5': '5%',
        '10': '10%',
      },
      aspectRatio: {
        'portrait-small':'2/3',
        'portrait': '3/4',
        'portrait-tall': '3/5',
        'landscape':'4/3',
      },
      minHeight: {
        '35': '35vh',
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '100': '100vh',
      },
      colors: {     
        'cream': '#fff4e0',
        'sand-light': '#fae4cc',
        'sand-mid': '#ebd4b4',
        'coffee-light': '#c3ac8c',
        'coffee-mid': '#bba187',
        'coffee':'#9c795f',
      },
    },
  },
  plugins: [],
}




