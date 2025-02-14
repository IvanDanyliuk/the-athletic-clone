import { createTheme } from '@mui/material';

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h3_custom: React.CSSProperties;
    body1_custom: React.CSSProperties;
    subtitle1_custom: React.CSSProperties;
    h4_custom: React.CSSProperties;
    h6_custom: React.CSSProperties;
    h2_custom: React.CSSProperties;
    h3_top_section: React.CSSProperties;
    h5_custom:  React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h3_custom?: React.CSSProperties;
    body1_custom?: React.CSSProperties;
    subtitle1_custom?: React.CSSProperties;
    h4_custom?: React.CSSProperties;
    h6_custom?: React.CSSProperties;
    h2_custom?: React.CSSProperties;
    h3_top_section?: React.CSSProperties;
    h5_custom?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h3_custom: true;
    body1_custom: true;
    subtitle1_custom: true;
    h4_custom: true;
    h6_custom: true;
    h2_custom: true;
    h3_top_section: true;
    h5_custom: true;
  }
}

export const theme = createTheme({
  typography: {
    h3_custom: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '2em',
      fontWeight: 700,
      color: '#121212',
    },
    body1_custom: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      color: '#121212',
    },
    subtitle1_custom: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      color: '#121212',
    },
    h2_custom: {
        fontFamily: `'Arvo', serif`,
        fontWeight: 700,
        fontSize: '1.7em',
        color: '#121212',
    },
    h4_custom: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '1em',
      fontWeight: 500,
      color: '#121212',
    },
    h5_custom: {
      fontFamily: `'Train One', cursive`,
      fontSize: '2em',
      fontWeight: 400,
    },
    h6_custom: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '.9em',
      fontWeight: 500,
      color: '#121212',
    },
    h3_top_section: {
      fontFamily: `'Roboto Serif', serif`,
      fontSize: '2em',
      fontWeight: 700,
      color: '#121212',
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h3_custom: 'h3',
          h4_custom: 'h4',
          h6_custom: 'h6',
          body1_custom: 'p',
          subtitle1_custom: 'p',
          h2_custom: 'h2',
          h3_top_section: 'h3',
          h5_custom: 'h5',
        },
      },
    },
  },
});