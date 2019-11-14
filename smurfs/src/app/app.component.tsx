import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';

import { store } from './state/app.store';
import { SmurfsPage } from './pages/smurfs.page';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <SmurfsPage />
    </Provider>
  );
};

export { App };
