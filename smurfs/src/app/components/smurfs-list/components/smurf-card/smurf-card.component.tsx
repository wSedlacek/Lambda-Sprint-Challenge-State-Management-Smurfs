import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Card, CardContent, Typography, makeStyles } from '@material-ui/core';

import { Smurf } from '../../../../models/Smurf';
import { deleteSmurf } from '../../../../state/app.actions';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

type SmurfCardProps = {
  smurf: Smurf;
};

const SmurfCard = (props: SmurfCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { smurf } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h3' gutterBottom>
          {smurf.name}
        </Typography>
        <Typography variant='body1'>{`Years Old: ${smurf.age}`}</Typography>
        <Typography variant='body1'>{`Height: ${smurf.height}`}</Typography>
        <Button onClick={() => deleteSmurf(smurf)(dispatch)}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export { SmurfCard };
