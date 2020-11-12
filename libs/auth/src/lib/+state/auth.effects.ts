import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LoginSuccess),
        map((action) => action.redirectTo),
        tap((redirectUrl) =>
          redirectUrl
            ? this.router.navigateByUrl(redirectUrl)
            : this.router.navigate(['/products'])
        )
      ),
    { dispatch: false }
  );

  navigateToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Logout),
        tap(() => this.router.navigate(['/auth/login']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
