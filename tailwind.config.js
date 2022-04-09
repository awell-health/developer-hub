module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        proseBg: '#1e293b',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontSize: {
        xxs: ['0.65rem', '1'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      ),
        addVariant(
          'supports-scrollbars',
          '@supports selector(::-webkit-scrollbar)'
        )
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    },
  ],
}
