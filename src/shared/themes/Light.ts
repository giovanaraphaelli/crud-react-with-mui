import { createTheme } from '@mui/material';
import { deepPurple, amber } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
      dark: deepPurple[800],
      light: deepPurple[500],
      contrastText: deepPurple[50],
    },
    secondary: {
      main: amber[500],
      dark: amber[400],
      light: amber[300],
      contrastText: amber[50],
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    },
  },
});
