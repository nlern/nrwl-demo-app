import { createReducer, on, Action } from '@ngrx/store';

import { User } from '@demo-app/data-models';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  loaded: boolean; // has the user info been loaded
  user: User; // logged in user info
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  loaded: false,
  user: null,
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
  on(AuthActions.LoginFailure, (state, { error }) => ({
    ...state,
    error,
    user: null,
    loaded: false,
  })),
  on(AuthActions.Logout, (state) => ({
    ...state,
    user: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
