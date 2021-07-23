export const theme = {
  global: {
    colors: {
      brand: 'rgb(84, 91, 182)',
      active: '#228BE6',
      focus: '#228BE6',
      background: 'rgb(250, 250, 250)',
      border: {
        light: '#228BE6',
      },
    },
    font: {
      family: 'Montserrat',
      size: '18px',
      height: '20px',
    },
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
