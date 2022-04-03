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
  plugins: [],
}
