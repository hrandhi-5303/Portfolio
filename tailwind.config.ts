import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { accent: { DEFAULT: '#0ea5e9' } }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
