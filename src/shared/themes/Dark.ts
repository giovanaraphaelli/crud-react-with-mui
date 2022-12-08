import { createTheme } from '@mui/material';
import { deepPurple, amber } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[700],
      dark: deepPurple[800],
      light: deepPurple[700],
      contrastText: deepPurple[50],
    },
    secondary: {
      main: amber[500],
      dark: amber[400],
      light: amber[300],
      contrastText: amber[50],
    },
    background: {
      default: '#121212',
      paper: '#383838',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
});
