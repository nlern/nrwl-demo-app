import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Authenticate } from '@demo-app/data-models';

import { AuthPartialState } from '../../+state/auth.reducer';
import * as authActions from '../../+state/auth.actions';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthPartialState>) {}

  ngOnInit(): void {}

  login(authenticate: Authenticate): void {
    this.store.dispatch(authActions.Login({ payload: authenticate }));
  }
}
