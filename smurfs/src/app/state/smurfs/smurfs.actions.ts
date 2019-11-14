import axios from 'axios';

import { Smurf } from '../../models/Smurf';

type GetSmurfsStart = { type: 'GET_SMURFS_START' };
type GetSmurfsSuccess = { type: 'GET_SMURFS_SUCCESS'; payload: Smurf[] };
type GetSmurfsFailure = { type: 'GET_SMURFS_FAILURE'; payload: string };

type AddSmurfStart = { type: 'ADD_SMURF_START' };
type AddSmurfSuccess = { type: 'ADD_SMURF_SUCCESS'; payload: Smurf[] };
type AddSmurfFailure = { type: 'ADD_SMURF_FAILURE'; payload: string };

type DeleteSmurfStart = { type: 'DELETE_SMURF_START' };
type DeleteSmurfSuccess = { type: 'DELETE_SMURF_SUCCESS'; payload: Smurf[] };
type DeleteSmurfFailure = { type: 'DELETE_SMURF_FAILURE'; payload: string };

export type ClearError = { type: 'CLEAR_ERROR' };

export type GetSmurfs = GetSmurfsStart | GetSmurfsSuccess | GetSmurfsFailure;
export type AddSmurf = AddSmurfStart | AddSmurfSuccess | AddSmurfFailure;
export type DeleteSmurf = DeleteSmurfStart | DeleteSmurfSuccess | DeleteSmurfFailure;

export type SmurfsActions = GetSmurfs | AddSmurf | DeleteSmurf | ClearError;

export const getSmurfs = () => (dispatch: (action: GetSmurfs) => void) => {
  dispatch({ type: 'GET_SMURFS_START' });
  axios
    .get<Smurf[]>('http://localhost:3333/smurfs')
    .then((res) => dispatch({ type: 'GET_SMURFS_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_SMURFS_FAILURE', payload: err.toString() }));
};

export const addSmurf = (payload: Smurf) => (dispatch: (action: AddSmurf) => void) => {
  dispatch({ type: 'ADD_SMURF_START' });
  axios
    .post<Smurf[]>('http://localhost:3333/smurfs', { ...payload })
    .then((res) => dispatch({ type: 'ADD_SMURF_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'ADD_SMURF_FAILURE', payload: err.toString() }));
};

export const deleteSmurf = (payload: Smurf) => (dispatch: (action: DeleteSmurf) => void) => {
  dispatch({ type: 'DELETE_SMURF_START' });
  axios
    .delete<Smurf[]>(`http://localhost:3333/smurfs/${payload.id}`)
    .then((res) => dispatch({ type: 'DELETE_SMURF_SUCCESS', payload: res.data }))
    .catch((err) => dispatch({ type: 'DELETE_SMURF_FAILURE', payload: err.toString() }));
};

export const clearError = () => (dispatch: (action: ClearError) => void) => {
  dispatch({ type: 'CLEAR_ERROR' });
};
