/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.85, 0, 0.15, 1)',
      },
      fontSize: {
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['18px', '24px'],
      },
      colors: {
        primary: {
          600: '#C1570A',
          500: '#F47920',
          400: '#F79455',
          300: '#FAB082',
          200: '#FCCAAC',
          100: '#FEE6D3',
          50: '#FFF4EC',
        },
        secondary: {
          600: '#102056',
          500: '#162C75',
          400: '#465591',
          300: '#7480AE',
          200: '#A3AAC9',
          100: '#D0D5E4',
          50: '#F5F6F9',
        },
        neutrals: {
          darkest: '#3A3F64',
          darker: '#7480AE', // same with secondary-300
          lighter: '#E6E7EB',
          lightest: '#F7F8F9 ',
        },
        green: {
          lightest: '#BAEEC0',
          DEFAULT: '#22952F',
        },
        yellow: {
          lightest: '#F6E2AE',
          DEFAULT: '#EDAD01',
        },
        red: {
          lightest: '#FFE1DD',
          DEFAULT: '#D61701',
        },
        blue: {
          lightest: '#CCE3FE',
          DEFAULT: '#1F86FF',
        },
      },
    },
  },
  plugins: [],
}
