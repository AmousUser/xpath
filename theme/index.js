const breakpoints = [
  '0em',  // 0px
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '80em', // 1280px
];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const colors = {
  grey: '#BDC2C4',
  violet: '#7367A0',
  mainDark: '#1A1C2B',
  lightGrey: '#F8F9FD',
  shadowGrey: '#F1F4FC',
  // rgba
  mainDark01: 'rgba(26, 28, 43, 0.1)',
  violet02: 'rgba(115, 103, 160, 0.2)',
};

const buttons = {
  secondary: {
    color: 'white',
    background: colors.violet,
  },
  cancel: {
    color: colors.mainDark,
    background: colors.mainDark01,
  },
  primary: {
    background: 'white',
    color: colors.mainDark,
    '&:hover': {
      color: 'white',
      background: colors.violet,
    }
  },
  dark: {
    color: 'white',
    background: 'black',
    '&:hover': {
      color: 'white',
      background: colors.violet,
    }
  },
};

const Theme = {
  colors,
  buttons,
  breakpoints,
};

export default Theme;
