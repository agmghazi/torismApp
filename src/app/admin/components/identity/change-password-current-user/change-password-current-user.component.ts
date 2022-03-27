import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Constants} from 'src/app/Helper/constants';
import {ChangePasswordViewModel} from 'src/app/models/identityModels/changePasswordViewModel';
import {ResponseModel} from 'src/app/models/identityModels/responseModel';
import {User} from 'src/app/models/identityModels/user';
import {IdentitySecurityService} from 'src/app/services/identity-security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-current-user',
  templateUrl: './change-password-current-user.component.html',
  styleUrls: ['./change-password-current-user.component.scss'],
})
export class ChangePasswordCurrentUserComponent implements OnInit {
  public editPassUserForm: FormGroup;
  changePasswordViewModel: ChangePasswordViewModel;
  messageValidate = {
    required: {
      required: 'الحقل مطلوب',
      projectName: '',
    },
  };

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private identitySecurity: IdentitySecurityService,
    private fb: FormBuilder
  ) {
    this.editPassUserForm = fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordConfirm: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.changePasswordViewModel = {
      id: '',
      confirmPassword: '',
      currentPassword: '',
      newPassword: '',
    };
  }

  saveUserData() {
    if (this.editPassUserForm.valid) {
      console.log(this.editPassUserForm);

      this.ngxLoader.start();

      const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;

      this.changePasswordViewModel.id = user.id;
      this.changePasswordViewModel.currentPassword =
        this.editPassUserForm.controls['currentPassword'].value;
      this.changePasswordViewModel.newPassword =
        this.editPassUserForm.controls['newPassword'].value;
      this.changePasswordViewModel.confirmPassword =
        this.editPassUserForm.controls['newPasswordConfirm'].value;

      if (user && user.userName) {
        this.identitySecurity
          .ChangePassword(this.changePasswordViewModel)
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
                  html: `تم التعديل بنجاح `,
                });
              } else {
                console.log('3232131');

                Swal.fire({
                  icon: 'error',
                  title: 'خطئ !',
                  confirmButtonText: 'حسنا',
                  text: `${data.responseMessage}`,
                });
              }
              this.ngxLoader.stop();
            },
            (error) => {
              this.ngxLoader.stop();
              console.log('error', error);
              Swal.fire({
                icon: 'error',
                title: 'خطئ !',
                confirmButtonText: 'حسنا',
                text: `${error.error.errors.ConfirmPassword[0]}`,
              });
            }
          );
      }
      this.ngxLoader.stop();
    }
  }
}
