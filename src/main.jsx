import { CssBaseline } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store.js';
import App from './components/App.jsx';

import 'bear-react-carousel/dist/index.css';

import ToggleColorMode from './context/ToggleColorMode.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToggleColorMode>
      <CssBaseline />
      <App />
    </ToggleColorMode>
  </Provider>,
);