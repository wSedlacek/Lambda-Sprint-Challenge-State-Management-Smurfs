import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Snackbar,
  SnackbarContent,
  Icon,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

import { State } from '../../state/app.reducer';
import { clearError } from '../../state/smurfs/smurfs.actions';

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: theme.palette.error.light,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Error = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [state, setState] = React.useState({
    open: false,
    error: '',
  });

  const dispatch = useDispatch();
  const smurfsError = useSelector<State, string>((state) => state.smurfs.error);

  React.useEffect(() => {
    if (smurfsError) setState({ open: true, error: smurfsError });
    console.log(smurfsError);
  }, [smurfsError]);

  React.useEffect(() => {
    if (!state.open) clearError()(dispatch);
  }, [state.open, dispatch]);

  const { error, open } = state;
  return (
    <Snackbar
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: md ? 'bottom' : 'top',
        horizontal: md ? 'left' : 'center',
      }}
      open={open}
      onClose={() => setState({ ...state, open: false })}>
      <SnackbarContent
        className={classes.error}
        message={
          <span className={classes.message}>
            <Icon className={classes.icon}>error</Icon>
            {error}
          </span>
        }></SnackbarContent>
    </Snackbar>
  );
};

export { Error };
