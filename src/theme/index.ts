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
  tablet: '768px',
  laptop: '1440px',
  desktop: '2560px',
  '4k': '3840px',
};

export const device = {
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  '4k': `(max-width: ${size['4k']})`,
};
