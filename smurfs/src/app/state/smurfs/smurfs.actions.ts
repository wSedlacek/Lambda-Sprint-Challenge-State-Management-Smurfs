import axios from 'axios';

import { Smurf } from '../../models/Smurf';

type GetSmurfsStart = { type: 'GET_SMURFS_START' };
type GetSmurfsSuccess = { type: 'GET_SMURFS_SUCCESS'; payload: Smurf[] };
type GetSmurfsFail = { type: 'GET_SMURFS_FAILURE'; payload: string };

export type GetSmurfs = GetSmurfsStart | GetSmurfsSuccess | GetSmurfsFail;

export const getSmurfs = () => (dispatch: (action: GetSmurfs) => void) => {
  dispatch({ type: 'GET_SMURFS_START' });
  axios
    .get<Smurf[]>('http://localhost:3333/smurfs')
    .then((res) => dispatch({ type: 'GET_SMURFS_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_SMURFS_FAILURE', payload: err.status }));
};
