import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {User} from 'src/app/models/identityModels/user';
import {IdentitySecurityService} from 'src/app/services/identity-security.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  public userList: User[] = [];

  constructor(
    private identitySecurity: IdentitySecurityService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.ngxLoader.start();
    this.identitySecurity.getAllUser().subscribe(
      (data: User[]) => {
        this.userList = data;
        this.ngxLoader.stop();
      },
      () => {
        this.ngxLoader.stop();
      }
    );
  }
}
