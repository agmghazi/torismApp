import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Constants} from '../Helper/constants';
import {AddUpdateRegisterUserBindingModel} from '../models/identityModels/addUpdateRegisterUserBindingModel';
import {ChangePasswordViewModel} from '../models/identityModels/changePasswordViewModel';
import {ResponseCode} from '../models/identityModels/enums/responseCode';
import {ResponseModel} from '../models/identityModels/responseModel';
import {Role} from '../models/identityModels/role';
import {User} from '../models/identityModels/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class IdentitySecurityService {
  IdentitySecurityUrl = environment.APIUrl + 'IdentitySecurity/';
  userStorage = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;

  constructor(private httpClient: HttpClient) {
  }

  login(userName: string, password: string) {
    const body = {
      UserName: userName,
      Password: password,
    };
    return this.httpClient.post<ResponseModel>(
      this.IdentitySecurityUrl + 'Login',
      body
    );
  }

  RefreshToken(token: string, userName: string) {
    const body = {
      userName: userName,
      previousToken: token,
    };
    return this.httpClient.post<ResponseModel>(
      this.IdentitySecurityUrl + 'RefreshToken',
      body
    );
  }

  RegisterUser(model: AddUpdateRegisterUserBindingModel) {
    return this.httpClient.post<ResponseModel>(
      this.IdentitySecurityUrl + 'RegisterUser',
      model
    );
  }

  EditUser(
    id: string,
    fullName: string,
    phoneNumber: string,
    userName: string,
    userJobCode: string,
    userJobType: string,
    email: string
  ) {
    const body = {
      Id: id,
      FullName: fullName,
      PhoneNumber: phoneNumber,
      UserName: userName,
      UserJobCode: userJobCode,
      UserJobType: userJobType,
      Email: email,
    };
    return this.httpClient.post<ResponseModel>(
      this.IdentitySecurityUrl + 'EditUser',
      body
    );
  }

  ChangePassword(model: ChangePasswordViewModel) {
    return this.httpClient.post<ResponseModel>(
      this.IdentitySecurityUrl + 'ChangePassword',
      model
    );
  }

  GetUser(id: string) {
    return this.httpClient
      .get<ResponseModel>(this.IdentitySecurityUrl + 'GetUser?id=' + id)
      .pipe(
        map((res) => {
          if (res.responseCode == ResponseCode.OK) {
          }
          return res;
        })
      );
  }

  GetRoles() {
    return this.httpClient
      .get<ResponseModel>(this.IdentitySecurityUrl + 'GetRoles')
      .pipe(
        map((res) => {
          if (res.responseCode == ResponseCode.OK) {
          }
          return res;
        })
      );
  }

  getAllUser() {
    return this.httpClient
      .get<ResponseModel>(this.IdentitySecurityUrl + 'GetAllUser', {})
      .pipe(
        map((res) => {
          let userList = new Array<User>();
          if (res.responseCode == ResponseCode.OK) {
            if (res.dateSet) {
              res.dateSet.map((x: User) => {
                userList.push(
                  new User(
                    x.id,
                    x.fullName,
                    x.email,
                    x.userName,
                    x.phoneNumber,
                    x.userJobType,
                    x.userJobCode,
                    x.roles
                  )
                );
              });
            }
          }
          return userList;
        })
      );
  }

  getUserList() {
    return this.httpClient
      .get<ResponseModel>(this.IdentitySecurityUrl + 'GetUserList', {})
      .pipe(
        map((res) => {
          let userList = new Array<User>();
          if (res.responseCode == ResponseCode.OK) {
            if (res.dateSet) {
              res.dateSet.map((x: User) => {
                userList.push(
                  new User(
                    x.id,
                    x.fullName,
                    x.email,
                    x.userName,
                    x.phoneNumber,
                    x.userJobType,
                    x.userJobCode,
                    x.roles
                  )
                );
              });
            }
          }
          return userList;
        })
      );
  }

  getAllRole() {
    return this.httpClient
      .get<ResponseModel>(this.IdentitySecurityUrl + 'GetRoles', {})
      .pipe(
        map((res) => {
          let roleList = new Array<Role>();
          if (res.responseCode == ResponseCode.OK) {
            if (res.dateSet) {
              res.dateSet.map((x: string) => {
                roleList.push(new Role(x));
              });
            }
          }
          return roleList;
        })
      );
  }

  GISAuth(nameAuth) {
    return this.httpClient.get(this.IdentitySecurityUrl + 'GISAuth?nameAuth=' + nameAuth).pipe(map((res) => res));
  }

  getUserId() {
    return !!this.userStorage ? this.userStorage.id : null;
  }

  getUserMail() {
    return !!this.userStorage ? this.userStorage.email : null;
  }

  getUserFullName() {
    return !!this.userStorage ? this.userStorage.fullName : null;
  }

  getUserName() {
    return !!this.userStorage ? this.userStorage.userName : null;
  }

  checkIsCurrentUserLogin(userId) {
    if (this.getUserId() == userId)
      return true
  }

  isAdminLogin() {
    if (this.userStorage && this.userStorage.roles.some(r => ["admin"].includes(r)))
      return true
  }
}
