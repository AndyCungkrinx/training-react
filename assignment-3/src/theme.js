import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(247,19,19)',
    },
    secondary: {
      main: '#42c5f5',
    },
    error: {
      main: red.A700,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
