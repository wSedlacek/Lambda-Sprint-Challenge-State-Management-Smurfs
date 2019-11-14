import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { AddSmurf } from '../components/add-smurf/add-smurf.component';
import { SmurfsList } from '../components/smurfs-list/smurfs-list.component';
import { Error } from '../components/error/error.component';

const SmurfsPage = () => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5'>Smurfs</Typography>
        </Toolbar>
      </AppBar>
      <AddSmurf />
      <SmurfsList />
      <Error />
    </>
  );
};

export { SmurfsPage };
