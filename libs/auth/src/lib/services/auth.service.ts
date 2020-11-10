import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Authenticate, User } from '@demo-app/data-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.setUser(user);
        })
      );
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  private setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.setToken(user.token);
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
