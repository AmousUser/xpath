const breakpoints = [
  '40em', // 640px
  '52em', // 832px
  '64em', // 1024px
  '80em', // 1280px
];

export const colors = {
  mainDark: '#1A1C2B',
};

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
