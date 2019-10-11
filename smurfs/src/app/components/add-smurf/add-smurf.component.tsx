import React from 'react';
import { Card, CardContent, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Smurf } from '../../models/Smurf';
import { addSmurf } from '../../state/app.actions';

const AddSmurf = () => {
  const [smurf, setSmurf] = React.useState<Smurf>({ name: '', age: 0, height: '' });
  const dispatch = useDispatch();

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

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder='Name'
            value={smurf.name}
            onChange={(e) => handleChange('name')(e.target.value)}
          />
          <TextField
            placeholder='Age'
            value={smurf.age}
            onChange={(e) => handleChange('age')(e.target.value)}
            type='number'
          />
          <TextField
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
