import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@emotion/react';
import { newTheme } from './mui-theme/mui-theme.js';

import App from './App.jsx';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store.js';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={newTheme}>
              <App />
            </ThemeProvider>
          </LocalizationProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
