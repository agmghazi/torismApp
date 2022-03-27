import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LayoutService} from '../../shared/services/layout.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {User} from 'src/app/models/identityModels/user';
import {Constants} from 'src/app/Helper/constants';
import {ResponseModel} from 'src/app/models/identityModels/responseModel';
import {IdentitySecurityService} from 'src/app/services/identity-security.service';
import {Title} from "@angular/platform-browser";

type UserFields = 'username' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string;
  public formErrors: FormErrors = {
    username: '',
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private layoutService: LayoutService,
    private router: Router,
    private ngxLoader: NgxUiLoaderService,
    private identitySecurity: IdentitySecurityService, private titleService: Title,
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.titleService.setTitle("تسجيل الدخول");
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (currentUser) {
      this.redirectUser(currentUser);
    }
    localStorage.clear();
    this.errorMessage = '';
  }

  login() {
    if (this.loginForm.valid) {
      this.ngxLoader.start();
      let username = this.loginForm.controls['username'].value;
      let password = this.loginForm.controls['password'].value;
      this.identitySecurity.login(username, password).subscribe((data: ResponseModel) => {
        if (data.responseCode == 1) {
          localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.dateSet));
          let user = data.dateSet as User;
          this.redirectUser(user);
          this.ngxLoader.stop();
        } else {
          this.errorMessage = 'كلمه المرور او اسم المستخدم خطئ';
          this.ngxLoader.stop();
        }
      }, (error) => {
        this.ngxLoader.stop();
        console.log('error', error);
      });
    }
  }

  redirectUser(user) {
    if (user.roles.indexOf('admin') > -1) {
      this.router.navigate(['/admin/panel/identity/all-users']);
    } else {
      this.redirectTo('/TourismApp/client')
    }
  }

  redirectTo(url: string) {
    window.open(url, "_self");
  }
}
