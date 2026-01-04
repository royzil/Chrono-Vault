import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#0a0a0a'
    },
    primary: {
      main: '#00c853'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bfbfbf'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { color: '#7CFC00' },
    h2: { color: '#66ff66' },
    h3: { color: '#52c41a' }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#050505'
        }
      }
    }
  }
});

export default theme;
