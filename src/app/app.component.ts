import {Component, OnInit} from '@angular/core';
import esriConfig from '@arcgis/core/config.js';
import {IdentitySecurityService} from './services/identity-security.service';
import jwt_decode from 'jwt-decode';
import {Constants} from './Helper/constants';
import {User} from './models/identityModels/user';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {ResponseModel} from './models/identityModels/responseModel';
import esriId from '@arcgis/core/identity/IdentityManager';
import {environment} from 'src/environments/environment';
import ServerInfo from '@arcgis/core/identity/ServerInfo';
import {EncryptionService} from "./services/encryption.service";
import {ShareDataService} from "./services/share-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private identitySecurity: IdentitySecurityService,
    private router: Router, private encryptionService: EncryptionService, private shareDataService: ShareDataService
  ) {
  }

  isExpired: boolean = false;
  title = 'NBN App';
  checker;

  ngOnInit(): void {
    esriConfig.assetsPath = 'https://github.com/agmghazi/torismApp/blob/gh-pages/assets';
    //production mode
    // esriConfig.assetsPath = '../../../assets';
    esriConfig.workers.workerPath =
      'https://github.com/agmghazi/torismApp/blob/gh-pages/assets/esri/core/workers/RemoteClient.js';
    this.intervalToken();
  }

  refreshToken() {
    this.isExpired = true;
    this.token();
  }


  intervalToken() {
    var root = this;
    this.checker = setInterval(function timeChecker() {
      const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;

      if (user && user.token) {
        // Get and Decode the Token
        const decoded: any = jwt_decode(user.token);
        // Check if the cookie is valid

        if (decoded.exp === undefined) {
          return false;
        }

        // Get Current Date Time
        const date = new Date(0);

        // Convert EXp Time to UTC
        let tokenExpDate = date.setUTCSeconds(decoded.exp);

        // If Value of Token time greter than

        if (tokenExpDate.valueOf() > new Date().valueOf() - 20000) {
        } else if (root.isExpired) {
          root.isExpired = true;
        } else {
          root.refreshToken();
        }
      }
    }, 500);
  }

  token() {
    let timerInterval;
    Swal.fire({
      icon: 'warning',
      title: `تم انتهاء الجلسه `,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'تحديث',
      cancelButtonText: 'الغاء',
      timerProgressBar: true,
      html: ' . سيتم الغلق تلقائي بعد  <b></b> اذا كنت تود الاستمرار اضعط تحديث',
      timer: 20000,
      onOpen: () => {
        const b: any = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
    }).then((result: any) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('====================================');
        console.log('onClose');
        console.log('====================================');
        clearInterval(timerInterval);
        this.isExpired = false;
        localStorage.clear();
        this.router.navigate(['/auth/login']);
        window.location.reload();
      } else {
        if (result.isConfirmed) {
          this.RefreshToken();

          console.log('isConfirmed');
        }
      }
    });
  }

  RefreshToken() {
    const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (user && user.token) {
      let userName = user.userName;
      let previousToken = user.token;
      this.identitySecurity.RefreshToken(previousToken, userName).subscribe(
        (data: ResponseModel) => {
          console.log(data);

          if (data.responseCode == 1) {
            localStorage.clear();

            localStorage.setItem(
              Constants.USER_KEY,
              JSON.stringify(data.dateSet)
            );
            let user = data.dateSet as User;
            if (user.roles.indexOf('Admin') > -1) {
              this.router.navigate(['/home/global-Components/identity/all-users']);
            } else {
              this.router.navigate(['/home']);
            }
          }
          this.isExpired = false;
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  }
}
