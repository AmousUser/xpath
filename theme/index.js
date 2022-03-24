const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '80em', // 1280px
];

export const colors = {
  mainDark: '#1A1C2B',
};

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const buttons = {
  primary: {
    color: colors.mainDark,
    '&:hover': {
      color: colors.mainDark,
    }
  },
};

const Theme = {
  colors,
  buttons,
  breakpoints,
};

export default Theme;
