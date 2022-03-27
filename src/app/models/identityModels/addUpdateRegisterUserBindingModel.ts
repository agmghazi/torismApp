export interface AddUpdateRegisterUserBindingModel {
  fullName: string;
  phoneNumber: string;
  email: string;
  userName: string;
  userJobType: string;
  userJobCode: string;
  password: string;
  confirmPassword: string;
  roles: string[];
}
