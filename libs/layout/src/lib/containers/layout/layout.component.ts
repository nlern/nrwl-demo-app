import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '@demo-app/data-models';
import { AuthPartialState, getAuthUser, Logout } from '@demo-app/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AuthPartialState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
  }

  logout() {
    this.store.dispatch(Logout());
  }
}
