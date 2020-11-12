import { Authenticate, User } from '@demo-app/data-models';
import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth Page] Login',
  props<{ payload: Authenticate }>()
);

export const LoginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ user: User, redirectTo?: string }>()
);

export const LoginFailure = createAction(
  '[Auth API] Login Fail',
  props<{ error: any }>()
);

export const Logout = createAction('[Layout Component] Logout');
