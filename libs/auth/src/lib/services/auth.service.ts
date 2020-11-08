import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Authenticate, User } from '@demo-app/data-models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
    const user = this.getUser();
    if (user) {
      this.userSubject$.next(user);
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.setUser(user);
          this.router.navigate(['']);
        })
      );
  }

  logout() {
    try {
      this.removeUser();
      this.router.navigate(['/auth/login']);
      return of(true);
    } catch (error) {
      console.error('Unable to logout: ', error);
      return of(false);
    }
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  private setUser(user: User) {
    this.userSubject$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.setToken(user.token);
  }

  private removeUser() {
    this.userSubject$.next(null);
    localStorage.removeItem('user');
    this.removeToken();
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
  }

  private removeToken() {
    localStorage.removeItem('token');
  }
}
