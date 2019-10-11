import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Smurf } from '../../models/Smurf';
import { State } from '../../state/app.reducer';
import { SmurfCard } from './components/smurf-card/smurf-card.component';
import { getSmurfs } from '../../state/smurfs/smurfs.actions';

const SmurfsList = () => {
  const smurfs = useSelector<State, Smurf[]>((state) => state.smurfs.list);
  const dispatch = useDispatch();

  React.useEffect(() => getSmurfs()(dispatch), [dispatch]);

  return (
    <>
      {smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf}></SmurfCard>
      ))}
    </>
  );
};

export { SmurfsList };
