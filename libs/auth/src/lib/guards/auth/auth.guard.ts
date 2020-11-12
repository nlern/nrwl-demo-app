import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { User } from '@demo-app/data-models';

import { AuthPartialState } from '../../+state/auth.reducer';
import { getAuthUser } from '../../+state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthPartialState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(
      select(getAuthUser),
      map((user: User) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/auth/login'], {
            queryParams: { redirectTo: state.url },
          });
          return false;
        }
      })
    );
  }
}
