import { Authenticate, User } from '@demo-app/data-models';
import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',
  Logout = '[Layout Component] Logout'
}

export const Login = createAction(
  AuthActionTypes.Login,
  props<{ payload: Authenticate }>()
);

export const LoginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ user: User }>()
);

export const LoginFailure = createAction(
  AuthActionTypes.LoginFail,
  props<{ error: any }>()
);

export const Logout = createAction(AuthActionTypes.Logout);
