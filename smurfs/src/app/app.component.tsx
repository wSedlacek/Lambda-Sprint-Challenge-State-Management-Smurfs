import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';

import { store } from './state/app.store';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <div></div>
    </Provider>
  );
};

export { App };
