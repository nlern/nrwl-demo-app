import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@demo-app/material';

import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
