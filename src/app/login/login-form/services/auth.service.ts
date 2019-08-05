import {Injectable} from '@angular/core';
import {CONFIG} from '../../../config/config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginFailedDialogComponent} from '../login-failed-dialog/login-failed-dialog.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    //private loginFailedTs: LoginFailedDialogComponent,
    private dialog: MatDialog
  ) {
  }

  login(loginEntered: string, passwordEntered: string) {
    return this.http.post(`${CONFIG.API_URL + 'users/login'}`, {username: loginEntered, password: passwordEntered})
      .toPromise()
      .then((response) => {

        const json = JSON.parse(JSON.stringify(response));
        const success = json.success;
        if (success) {

          sessionStorage.setItem('username', json.content.username);
          sessionStorage.setItem('id', json.content.id);

          this.router.navigate(['/dashboard']);
        } else {
          //this.loginFailedTs.onDialogOpen();
          this.onDialogOpen();
        }
      });
  }

  onDialogOpen() {
    const dialogRef = this.dialog.open(LoginFailedDialogComponent, {
      width: '250px'
    });
  }
}
