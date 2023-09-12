import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '376px',
        'sm': '426px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
      },
     fontFamily: {
      "spaceGrotesk": "var(--font-grotesk)"
      },
      colors: {
        'primary-color': "#1454FE",
        'light-gray-color': '#D9D9D9',
        'dark-gray-color': '#BCBCBC',
      }
    },
  },
  plugins: [],
}
export default config
