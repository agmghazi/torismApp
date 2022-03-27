import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

import {DatePipe} from '@angular/common';
import {AllUsersComponent} from './admin/components/identity/all-users/all-users.component';
import {EditCurrentUserComponent} from './admin/components/identity/edit-current-user/edit-current-user.component';
import {httpInterceptorProvider} from './interceptors';
import {
  ChangePasswordCurrentUserComponent
} from './admin/components/identity/change-password-current-user/change-password-current-user.component';
import {CreateUserComponent} from './admin/components/identity/create-user/create-user.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#3e8b7e',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 100,
  fgsType: SPINNER.cubeGrid, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    EditCurrentUserComponent,
    ChangePasswordCurrentUserComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    NgbActiveModal,
    DatePipe,
    httpInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
