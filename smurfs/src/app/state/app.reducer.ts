import { combineReducers } from 'redux';

import { smurfsReducer, SmurfsState } from './smurfs/smurfs.reducer';

export type State = { smurfs: SmurfsState };
export const reducer = combineReducers({ smurfs: smurfsReducer });
