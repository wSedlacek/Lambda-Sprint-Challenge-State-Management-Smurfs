import { Smurf } from '../../models/Smurf';
import { SmurfsActions } from './smurfs.actions';

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

export const smurfsReducer = (state = initialState, action: SmurfsActions) => {
  switch (action.type) {
    case 'GET_SMURFS_START':
      return { ...state, error: '', loading: true };
    case 'GET_SMURFS_SUCCESS':
      return { ...state, error: '', loading: false, list: action.payload };
    case 'GET_SMURFS_FAILURE':
      return { ...state, error: action.payload, loading: false, list: [] };

    case 'ADD_SMURF_START':
      return { ...state, error: '', loading: true };
    case 'ADD_SMURF_SUCCESS':
      return { ...state, error: '', loading: false, list: action.payload };
    case 'ADD_SMURF_FAILURE':
      return { ...state, error: action.payload, loading: false };

    case 'DELETE_SMURF_START':
      return { ...state, error: '', loading: true };
    case 'DELETE_SMURF_SUCCESS':
      return { ...state, error: '', loading: false, list: action.payload };
    case 'DELETE_SMURF_FAILURE':
      return { ...state, error: action.payload, loading: false };

    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};
