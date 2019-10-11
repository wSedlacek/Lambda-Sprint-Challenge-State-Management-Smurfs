import React from 'react';
import { Button, Card, CardContent, TextField, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Smurf } from '../../models/Smurf';
import { State } from '../../state/app.reducer';
import { addSmurf } from '../../state/app.actions';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 10,
  },
});

const AddSmurf = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>((state) => state.smurfs.loading);
  const [smurf, setSmurf] = React.useState<Smurf>({ name: 'Papa', age: 546, height: '5.1 cm' });

  const handleChange = (key: string) => (value: string | number) => {
    setSmurf({
      ...smurf,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSmurf(smurf)(dispatch);
  };

  if (loading) return <></>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            placeholder='Name'
            value={smurf.name}
            onChange={(e) => handleChange('name')(e.target.value)}
          />
          <TextField
            className={classes.input}
            placeholder='Age'
            value={smurf.age}
            onChange={(e) => handleChange('age')(e.target.value)}
            type='number'
          />
          <TextField
            className={classes.input}
            placeholder='Height'
            value={smurf.height}
            onChange={(e) => handleChange('height')(e.target.value)}
          />
          <Button variant='contained' color='primary' type='submit'>
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export { AddSmurf };
