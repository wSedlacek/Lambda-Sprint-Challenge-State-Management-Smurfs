import React from 'react';

import { AddSmurf } from '../components/add-smurf/add-smurf.component';
import { SmurfsList } from '../components/smurfs-list/smurfs-list.component';

const SmurfsPage = () => {
  return (
    <>
      <AddSmurf />
      <SmurfsList />
    </>
  );
};

export { SmurfsPage };
