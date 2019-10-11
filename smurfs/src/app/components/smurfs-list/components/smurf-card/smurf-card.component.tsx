import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import { Smurf } from '../../../../models/Smurf';

type SmurfCardProps = {
  smurf: Smurf;
};

const SmurfCard = (props: SmurfCardProps) => {
  const { smurf } = props;

  return (
    <Card>
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
