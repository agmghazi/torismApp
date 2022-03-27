import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {AllUsersComponent} from "./components/identity/all-users/all-users.component";
import {AuthGuard} from "../guards/auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {CreateUserComponent} from "./components/identity/create-user/create-user.component";
import {EditCurrentUserComponent} from "./components/identity/edit-current-user/edit-current-user.component";
import {
  ChangePasswordCurrentUserComponent
} from "./components/identity/change-password-current-user/change-password-current-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'all-users', pathMatch: 'full' },
  {
    path: 'identity/all-users',
    component: AllUsersComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'identity/create-user',
    component: CreateUserComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'identity/EditCurrentUser',
    component: EditCurrentUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'identity/ChangePasswordCurrentUser',
    component: ChangePasswordCurrentUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
