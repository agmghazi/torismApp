import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';
import {Constants} from '../Helper/constants';
import {User} from '../models/identityModels/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if (user && user.userName) {
      return true;
    } else {
      localStorage.clear();
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
