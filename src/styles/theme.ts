import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    black: {    
      500: '#353535',
      300: '#434343',
      alpha: 'rgba(0, 0, 0, 0.07)'
    },
    gray: {
      950: '#09090A',
      900: '#121214',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#B1B1B1',
      100: '#E5E5E5',
    },
    blue: {
      100: '#D0EBFF',
      500: '#0B7DD2',
      700: '#0066B3',
      800: '#005392',
    },
    orange: {
      500: '#EF7F31'
    },
    white: {
      100: '#FFFFFF',
      200: '#FBFBFB'
    }
  },
  fonts: {
    heading: 'AvenirBlack',
    body: 'AvenirRegular',
    bold: 'AvenirBold',
    medium: 'AvenirMedium',
    black: 'AvenirBlack',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
    xxl: 32
  },
  sizes: {
    14: 56,
    22: 87
  }
});