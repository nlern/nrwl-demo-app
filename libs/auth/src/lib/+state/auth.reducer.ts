import { createReducer, on, Action } from '@ngrx/store';

import { User } from '@demo-app/data-models';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  user?: User; // logged in user info
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.Login, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.LoginSuccess, (state, { user }) => ({
    ...state,
    loaded: true,
    user,
  })),
  on(AuthActions.LoginFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
