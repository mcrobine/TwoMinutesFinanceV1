import {Injectable} from '@angular/core';
import {CONFIG} from '../../../config/config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginFailedDialogComponent} from '../login-failed-dialog/login-failed-dialog.component';
import {MatDialog} from '@angular/material';
import {NewAccountFailedDialogComponent} from '../../create-account/new-account-failed-dialog/new-account-failed-dialog.component';
import {NewAccountSuccessDialogComponent} from '../../create-account/new-account-success-dialog/new-account-success-dialog.component';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
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
          this.onDialogLoginFailedOpen();
        }
      });
  }

  createAccount(formVal) {
    return this.http.post(`${CONFIG.API_URL + 'users/new-account'}`, {
      username: formVal.username,
      password: formVal.password,
      email: formVal.email,
      //formVal
    })
      .toPromise()
      .then((response) => {
        const json = JSON.parse(JSON.stringify(response));
        const success = json.success;
        if (success) {
          this.onDialogNewAccountSuccessOpen();
        } else {
          this.onDialogNewAccountFailedOpen();
        }
      });
  }

  onDialogLoginFailedOpen() {
    const dialogRef = this.dialog.open(LoginFailedDialogComponent, {
      width: '250px'
    });
  }

  onDialogNewAccountFailedOpen() {
    const dialogRef = this.dialog.open(NewAccountFailedDialogComponent, {
      width: '250px'
    });
  }

  onDialogNewAccountSuccessOpen() {
    const dialogRef = this.dialog.open(NewAccountSuccessDialogComponent, {
      width: '250px'
    });
  }

}
