import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xs': '330px',
      '2xs': '392px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': '#D65A31',
        'secondary': '#ECDBBA',
        'foreground': 'grey',
        'background': '#242424',
        'text': "white"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
export default config
