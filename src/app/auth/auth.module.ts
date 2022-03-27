
import { LayoutService } from '../shared/services/layout.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authenticationRoutes } from './auth.routes';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {SharedModule} from "../shared/shared.module";
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(authenticationRoutes),
        SharedModule,
    ],
  providers: [LayoutService],
})
export class AuthModule {}
