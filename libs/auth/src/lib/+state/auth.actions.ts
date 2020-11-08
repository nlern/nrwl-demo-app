import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',
}

export const Login = createAction(AuthActionTypes.Login);

export const LoginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ auth: AuthEntity[] }>()
);

export const LoginFailure = createAction(
  AuthActionTypes.LoginFail,
  props<{ error: any }>()
);
