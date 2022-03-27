import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Constants} from 'src/app/Helper/constants';
import {ResponseModel} from 'src/app/models/identityModels/responseModel';
import {User} from 'src/app/models/identityModels/user';
import {IdentitySecurityService} from 'src/app/services/identity-security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-current-user',
  templateUrl: './edit-current-user.component.html',
  styleUrls: ['./edit-current-user.component.scss'],
})
export class EditCurrentUserComponent implements OnInit {
  public editUserForm: FormGroup;
  messageValidate = {
    required: {
      required: 'الحقل مطلوب',
      projectName: '',
    },
  };

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private identitySecurity: IdentitySecurityService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.editUserForm = fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      userName: ['', Validators.required],
      userJobCode: ['', Validators.required],
      userJobType: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.getUser();
  }

  ngOnInit(): void {}

  getUser() {
    const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (user && user.userName) {
      this.identitySecurity.GetUser(user.id).subscribe(
        (data) => {
          console.log('GetUser', data.dateSet.fullName);

          this.editUserForm.get('fullName').setValue(data.dateSet.fullName);
          this.editUserForm
            .get('phoneNumber')
            .setValue(data.dateSet.phoneNumber);
          this.editUserForm.get('userName').setValue(data.dateSet.userName);
          this.editUserForm
            .get('userJobCode')
            .setValue(data.dateSet.userJobCode);
          this.editUserForm
            .get('userJobType')
            .setValue(data.dateSet.userJobType);
          this.editUserForm.get('email').setValue(data.dateSet.email);
        },
        (error) => {
          this.ngxLoader.stop();
          console.log('error', error);
        }
      );
    }
  }

  saveUserData() {
    if (this.editUserForm.valid) {
      console.log(this.editUserForm);

      this.ngxLoader.start();

      let fullName = this.editUserForm.controls['fullName'].value;
      let phoneNumber = this.editUserForm.controls['phoneNumber'].value;
      let userName = this.editUserForm.controls['userName'].value;
      let userJobCode = this.editUserForm.controls['userJobCode'].value;
      let userJobType = this.editUserForm.controls['userJobType'].value;
      let email = this.editUserForm.controls['email'].value;

      const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;

      if (user && user.userName) {
        this.identitySecurity
          .EditUser(
            user.id,
            fullName,
            phoneNumber,
            userName,
            userJobCode,
            userJobType,
            email
          )
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
