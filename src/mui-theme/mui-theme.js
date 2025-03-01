import { createTheme } from '@mui/material';

export const newTheme = theme =>
  createTheme({
    ...theme,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color: '#f7f7f7',
            borderRadius: '12px',
            borderWidth: '0px',
            borderColor: '#f7f7f7',
            border: '0px solid',
            backgroundColor: '#f7f7f7',
          },
        },
      },
    },
  });
