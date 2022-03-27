import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Constants} from 'src/app/Helper/constants';
import {AddUpdateRegisterUserBindingModel} from 'src/app/models/identityModels/addUpdateRegisterUserBindingModel';
import {ResponseModel} from 'src/app/models/identityModels/responseModel';
import {User} from 'src/app/models/identityModels/user';
import {IdentitySecurityService} from 'src/app/services/identity-security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  public createUserForm: FormGroup;
  roles: [] = [];
  addUpdateRegisterUserBindingModel: AddUpdateRegisterUserBindingModel;

  account_validation_messages = {
    username: [{type: 'required', message: 'الحقل مطلوب'}],
    email: [
      {type: 'required', message: 'الحقل مطلوب'},
      {type: 'pattern', message: 'Enter a valid email'},
    ],
    phoneNumber: [
      {type: 'required', message: 'الحقل مطلوب'},
      {type: 'pattern', message: 'Enter a valid email'},
    ],
    fullName: [{type: 'required', message: 'الحقل مطلوب'}],
    userJobCode: [{type: 'required', message: 'الحقل مطلوب'}],
    userJobType: [{type: 'required', message: 'الحقل مطلوب'}],
    Role: [{type: 'required', message: 'الحقل مطلوب'}],
    confirmPassword: [
      {type: 'required', message: 'الحقل مطلوب'},
      {type: 'areEqual', message: 'تاكيد كمله السر يجب ان تطابق كلمه السر'},
    ],
    password: [
      {type: 'required', message: 'الحقل مطلوب'},
      {
        type: 'pattern',
        message:
          'خطأ. يجب أن تحتوي كلمة المرور على حرف كبير وحرف خاص واحد وحرف رقمي واحد ، لا يمكن أن يبدأ بحرف خاص أو رقم',
      },
    ],
  };

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private identitySecurity: IdentitySecurityService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createUserForm = fb.group(
      {
        username: ['', Validators.required],
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        userJobCode: ['', Validators.required],
        userJobType: ['', Validators.required],
        email: [
          '',

          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            ),
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$'),
          ]),
        ],
        confirmPassword: ['', Validators.required],
        Role: ['', Validators.required],
      },
      {
        validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
      }
    );
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({areEqual: true});
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  ngOnInit(): void {
    this.getAllRoles();

    this.addUpdateRegisterUserBindingModel = {
      fullName: '',
      userName: '',
      email: '',
      confirmPassword: '',
      password: '',
      phoneNumber: '',
      roles: [],
      userJobCode: '',
      userJobType: '',
    };
  }

  getAllRoles() {
    this.identitySecurity.GetRoles().subscribe((data: ResponseModel) => {
      this.roles = data.dateSet;
      console.log('this.roles', this.roles);
    });
  }

  saveUserData() {
    console.log(this.createUserForm);
    if (this.createUserForm.valid) {
      this.ngxLoader.start();

      this.addUpdateRegisterUserBindingModel.fullName =
        this.createUserForm.controls['fullName'].value;
      this.addUpdateRegisterUserBindingModel.userName =
        this.createUserForm.controls['username'].value;
      this.addUpdateRegisterUserBindingModel.phoneNumber =
        this.createUserForm.controls['phoneNumber'].value;
      this.addUpdateRegisterUserBindingModel.userJobCode =
        this.createUserForm.controls['userJobCode'].value;
      this.addUpdateRegisterUserBindingModel.userJobType =
        this.createUserForm.controls['userJobType'].value;
      this.addUpdateRegisterUserBindingModel.email =
        this.createUserForm.controls['email'].value;
      this.addUpdateRegisterUserBindingModel.password =
        this.createUserForm.controls['password'].value;
      this.addUpdateRegisterUserBindingModel.confirmPassword =
        this.createUserForm.controls['confirmPassword'].value;
      this.addUpdateRegisterUserBindingModel.roles.push(
        this.createUserForm.controls['Role'].value
      );

      const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;

      if (user && user.userName) {
        this.identitySecurity
          .RegisterUser(this.addUpdateRegisterUserBindingModel)
          .subscribe(
            (data: ResponseModel) => {
              if (data.responseCode == 1) {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
                Swal.fire({
                  icon: 'success',
                  title: `حفظ البيانات.`,
                  showConfirmButton: true,
                  confirmButtonText: 'حسنا',
                  html: `تم انشاء المستخدم بنجاح `,
                });
                this.router.navigate(['/home/global-Components/identity/all-users']);
              } else {
                console.log(data.dateSet);

                Swal.fire({
                  icon: 'error',
                  title: 'خطئ !',
                  confirmButtonText: 'حسنا',
                  text: `${data.dateSet}`,
                });
              }
              this.ngxLoader.stop();
            },
            (error) => {
              this.ngxLoader.stop();
              console.log('error', error);
            }
          );
      }
      this.ngxLoader.stop();
    }
  }
}
