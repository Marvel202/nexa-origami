import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8843A3',
        'primary-light': '#a865c9',
        'primary-dark': '#6b2d85',
        'secondary-blue': '#0038A8',
        'secondary-green': '#00C853',
      },
      fontFamily: {
        heading: ['var(--font-quicksand)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
