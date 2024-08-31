import { fontConfig } from '../utils/font-config';

const PRIMARY_COLOR = '#00AB63';
const DEFAULT_FONT = '"Roboto", sans-serif';

export default {
  colors: {
    primary: {
      default: PRIMARY_COLOR,
      light: PRIMARY_COLOR,
      dark: PRIMARY_COLOR,
    },
    gray: {
      default: '#45505E',
      light: '#8C9CAD',
      dark: '#2E3742',
    },
    background: '#FFFFFF',
  },

  fonts: {
    default: fontConfig(DEFAULT_FONT, 'normal', 400, '1.8rem', '21px', '#2E3742'),
    h1: fontConfig(DEFAULT_FONT, 'normal', 600, '6.4rem', '80px', PRIMARY_COLOR),
    h5: fontConfig(DEFAULT_FONT, 'normal', 500, '1.8rem', '21px', '#2E3742'),
    h6: fontConfig(DEFAULT_FONT, 'normal', 450, '1.6rem', '24px', '#2E3742'),
    p: fontConfig(DEFAULT_FONT, 'normal', 400, '1.4rem', '16px', '#45505E'),
  },
};
