import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login),
      fetch({
        run: (action) => {
          return this.authService
            .login(action.payload)
            .pipe(map((user) => AuthActions.LoginSuccess({ user })));
        },

        onError: (action, error) => {
          console.error('Login Error', error);
          return AuthActions.LoginFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
