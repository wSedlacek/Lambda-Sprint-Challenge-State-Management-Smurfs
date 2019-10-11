import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, makeStyles } from '@material-ui/core';

import { Smurf } from '../../models/Smurf';
import { State } from '../../state/app.reducer';
import { SmurfCard } from './components/smurf-card/smurf-card.component';
import { getSmurfs } from '../../state/smurfs/smurfs.actions';

const useStyles = makeStyles({
  loading: {
    display: 'block',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const SmurfsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>((state) => state.smurfs.loading);
  const smurfs = useSelector<State, Smurf[]>((state) => state.smurfs.list);

  React.useEffect(() => getSmurfs()(dispatch), [dispatch]);

  return (
    <>
      {loading && <CircularProgress className={classes.loading} />}
      {!loading && smurfs.map((smurf) => <SmurfCard key={smurf.id} smurf={smurf}></SmurfCard>)}
    </>
  );
};

export { SmurfsList };
