import { Smurf } from '../../models/Smurf';
import { GetSmurfs } from './smurfs.actions';

export type SmurfsState = {
  list: Smurf[];
  error: string;
  loading: boolean;
};

const initialState: SmurfsState = {
  list: [],
  error: '',
  loading: false,
};

export const smurfsReducer = (state = initialState, action: GetSmurfs) => {
  switch (action.type) {
    case 'GET_SMURFS_START':
      return { ...state, error: '', loading: true };
    case 'GET_SMURFS_SUCCESS':
      return { ...state, error: '', loading: false, list: action.payload };
    case 'GET_SMURFS_FAILURE':
      return { ...state, error: action.payload, loading: false, list: [] };
    default:
      return state;
  }
};
