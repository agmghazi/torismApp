import {Constants} from '../../Helper/constants';

export class User {
  public id: string = '';
  public fullName: string = '';
  public email: string = '';
  public userName: string = '';
  public phoneNumber: string = '';
  public userJobType: string = '';
  public userJobCode: string = '';
  public roles: string[] = [];
  public token: string = '';

  constructor(
    id: string,
    fullName: string,
    email: string,
    userName: string,
    phoneNumber: string,
    userJobType: string,
    userJobCode: string,
    roles: string[],
    token: string = ''
  ) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.userJobType = userJobType;
    this.userJobCode = userJobCode;
    this.roles = roles;
    this.token = token;
  }
}
