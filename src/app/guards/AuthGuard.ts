import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../funcionalities/login/services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate() {
    if (this.authService.isLoggedin()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
