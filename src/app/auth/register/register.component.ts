import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {LayoutService} from "../../shared/services/layout.service";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {IdentitySecurityService} from "../../services/identity-security.service";
import {Constants} from "../../Helper/constants";
import {User} from "../../models/identityModels/user";
import {ResponseModel} from "../../models/identityModels/responseModel";
import {AddUpdateRegisterUserBindingModel} from "../../models/identityModels/addUpdateRegisterUserBindingModel";
import Swal from "sweetalert2";
import {Title} from "@angular/platform-browser";

type UserFields = 'username' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessage: string;
  addUpdateRegisterUserBindingModel: AddUpdateRegisterUserBindingModel
  public formErrors: FormErrors = {
    username: '',
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private layoutService: LayoutService,
    private router: Router,private titleService: Title,
    private ngxLoader: NgxUiLoaderService,
    private identitySecurity: IdentitySecurityService
  ) {
    this.registerForm = fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(100)])],
    }, {validators: this.checkPasswords});
    this.titleService.setTitle("تسجيل مستخدم جديد");
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : {notSame: true}
  }

  ngOnInit() {
    localStorage.clear();
    this.errorMessage = '';
  }

  register() {
    if (this.registerForm.valid) {
      this.ngxLoader.start();
      this.addUpdateRegisterUserBindingModel = {
        fullName: "",
        phoneNumber: "",
        email: "",
        userName: this.registerForm.controls['userName'].value,
        userJobType: "",
        userJobCode: "",
        password: this.registerForm.controls['password'].value,
        confirmPassword: this.registerForm.controls['confirmPassword'].value,
        roles: ["user"],
      }
      this.identitySecurity.RegisterUser(this.addUpdateRegisterUserBindingModel).subscribe((data: ResponseModel) => {
        console.log(data)
        if (data.responseCode == 1) {
          Swal.fire({
            title: ' تنبيه! ',
            text: 'تم انشاء الحساب بنجاح',
            icon: 'success',
            confirmButtonText: 'حسنا'
          }).then(() => {
            let userName = this.registerForm.controls['userName'].value
            let password = this.registerForm.controls['password'].value
            this.login(userName, password)
          })
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
  goToAbsher(){
    console.log('absher')
  }
  login(username, password) {
    this.ngxLoader.start();
    this.identitySecurity.login(username, password).subscribe((data: ResponseModel) => {
      if (data.responseCode == 1) {
        localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.dateSet));
        let user = data.dateSet as User;
        this.ngxLoader.stop();
        if (user)
          this.router.navigate(['/client']);
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
