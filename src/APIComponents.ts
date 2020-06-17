import { Platform } from 'react-native'
//
const mainColor = {
  primary: '#50E3C2',
  secondary: '#ff06f4'
}

const h0 = {
  fontFamily: Platform.OS === 'ios' ? 'Etna' : 'etna-free-font'
}

const h1 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
}

const h2 = {
  fontFamily: Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush'
}

const h3 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
}

const h4 = {
  fontFamily: 'Avenir Next'
}

const h5 = {
  fontFamily: 'Avenir Next'
}

const h6 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
}

const h7 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
}

const h8 = {
  fontFamily: '3270Narrow'
}

const body = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
}

const DarkTheme = {
  dark: true,
  colors: {
    ...mainColor,
    buttonColor: '#50E3C2',
    backgroundColor: '#1D1E1F',
    backgroundColor2: '#222325',
    text: '#ffffff',
    placeholderTextColor: '#707070'
  },
  h0: {
    ...h0
  },
  h1: {
    ...h1,
    color: '#ffffff'
  },
  h2: {
    ...h2,
    color: '#ffffff'
  },
  h3: {
    ...h3,
    color: '#ffffff'
  },
  h4: {
    ...h4,
    color: '#707070'
  },
  h5: {
    ...h5,
    color: '#D1CDCD'
  },
  h6: {
    ...h6,
    color: '#ffffff'
  },
  h7: {
    ...h7,
    color: '#ffffff'
  },
  h8: {
    ...h8,
    color: '#ffffff'
  },
  body: {
    ...body,
    color: '#949494'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    ...mainColor,
    buttonColor: '#1D1E1F',
    backgroundColor: '#ffffff',
    backgroundColor2: '#ffffff',
    text: '#1D1E1F',
    placeholderTextColor: '#707070'
  },
  h0: {
    ...h0
  },
  h1: {
    ...h1,
    color: '#1D1E1F'
  },
  h2: {
    ...h2,
    color: '#1D1E1F'
  },
  h3: {
    ...h3,
    color: '#1D1E1F'
  },
  h4: {
    ...h4,
    color: '#707070'
  },
  h5: {
    ...h5,
    color: '#D1CDCD'
  },
  h6: {
    ...h6,
    color: '#1D1E1F'
  },
  h7: {
    ...h7,
    color: '#1D1E1F'
  },
  h8: {
    ...h8,
    color: '#ffffff'
  },
  body: {
    ...body,
    color: '#949494'
  }
}

export { DarkTheme, LightTheme }
