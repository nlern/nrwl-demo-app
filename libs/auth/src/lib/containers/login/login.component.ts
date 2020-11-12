import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Authenticate } from '@demo-app/data-models';

import { AuthPartialState } from '../../+state/auth.reducer';
import * as authActions from '../../+state/auth.actions';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<AuthPartialState>,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.store.dispatch(
        authActions.LoginSuccess({
          user,
          redirectTo: this.route.snapshot.queryParams['redirectTo'],
        })
      );
    }
  }

  login(authenticate: Authenticate): void {
    this.store.dispatch(authActions.Login({ payload: authenticate }));
  }
}
