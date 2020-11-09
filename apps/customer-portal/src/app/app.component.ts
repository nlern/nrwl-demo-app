import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthPartialState, AuthService, LoginSuccess } from '@demo-app/auth';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AuthPartialState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.store.dispatch(LoginSuccess({ user }));
    }
  }
}
