import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";

export const authenticationRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
