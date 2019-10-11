import React from 'react';

import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

import { Smurf } from '../../../../models/Smurf';

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
  const { smurf } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h3' gutterBottom>
          {smurf.name}
        </Typography>
        <Typography variant='body1'>{`Years Old: ${smurf.age}`}</Typography>
        <Typography variant='body1'>{`Height: ${smurf.height}`}</Typography>
      </CardContent>
    </Card>
  );
};

export { SmurfCard };
