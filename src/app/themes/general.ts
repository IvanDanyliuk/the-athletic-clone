import { createTheme } from '@mui/material';

export const theme = createTheme({
  // palette: {
  //   primary: {},
  //   secondary: {},
  // },
  typography: {
    //regular text of website materials
    body1: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      color: '#121212',
    },
    body2: {
      
    },
    //Must Read article title
    h1: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '2em',
    },
    //Section title
    h2: {
      fontFamily: `'Arvo', serif`,
      fontWeight: 700,
      fontSize: '1.7em',
      color: '#121212',
    },
    //Title of the main material of the section
    h3: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '2em',
      fontWeight: 700,
      color: '#121212',
    },
    //Title of the secondary material of the section
    h4: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      color: '#121212',
    },
    h5: {
      fontFamily: `'Train One', cursive`,
      fontSize: '2em',
    },
    h6: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '.9em',
      color: '#121212',
    },
    subtitle1: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      color: '#121212',
    },
    subtitle2: {
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '1em',
      fontWeight: 700,
      color: '#121212',
    },
    caption: {
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '.7em',
    },
    overline: {
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '1em'
    },
  }
})