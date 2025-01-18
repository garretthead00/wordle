/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        default: '16px',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#7E3DD4',
        accent: '#FDD023',
        appPurple: '#461D7C',
        appDarkPurple: '#3C1053',
        appLightPurple: '#A39AAC',
        appGold: '#FDD023',
        appDarkGold: '#D29F13',
        appLightGold: '#F1EEDB',
        appLightGray: '#D0D0CE',
        appGray: '#999999',
        appBlack: '#333333',
      },
      backgroundImage: {
        site: "url('/public/images/background.jpg')",
      },
    },
  },
  plugins: [],
}



