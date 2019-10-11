import axios from 'axios';

import { Smurf } from '../../models/Smurf';

type GetSmurfsStart = { type: 'GET_SMURFS_START' };
type GetSmurfsSuccess = { type: 'GET_SMURFS_SUCCESS'; payload: Smurf[] };
type GetSmurfsFail = { type: 'GET_SMURFS_FAILURE'; payload: string };

type AddSmurfStart = { type: 'ADD_SMURF_START' };
type AddSmurfSuccess = { type: 'ADD_SMURF_SUCCESS' };
type AddSmurfFail = { type: 'ADD_SMURF_FAILURE'; payload: string };

export type GetSmurfs = GetSmurfsStart | GetSmurfsSuccess | GetSmurfsFail;
export type AddSmurf = AddSmurfStart | AddSmurfSuccess | AddSmurfFail;
export type SmurfActions = GetSmurfs | AddSmurf;

export const getSmurfs = () => (dispatch: (action: GetSmurfs) => void) => {
  dispatch({ type: 'GET_SMURFS_START' });
  axios
    .get<Smurf[]>('http://localhost:3333/smurfs')
    .then((res) => dispatch({ type: 'GET_SMURFS_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_SMURFS_FAILURE', payload: err.status }));
};

export const addSmurf = (smurf: Smurf) => (dispatch: (action: AddSmurf | GetSmurfs) => void) => {
  dispatch({ type: 'ADD_SMURF_START' });
  axios
    .post<Smurf>('http://localhost:3333/smurfs', { ...smurf })
    .then(() => {
      dispatch({ type: 'ADD_SMURF_SUCCESS' });
      getSmurfs()(dispatch);
    })
    .catch((err) => dispatch({ type: 'ADD_SMURF_FAILURE', payload: err.status }));
};
