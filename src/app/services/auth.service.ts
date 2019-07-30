import {Injectable} from '@angular/core';
import {CONFIG} from './../config/config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserData} from '../classes/UserData';
import {User} from '../classes/User';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  login(loginEntered: string, passwordEntered: string): Promise<UserData> {
    return this.http.post(`${CONFIG.API_URL + 'users/login'}`, {username: loginEntered, password: passwordEntered})
      .toPromise()
      .then((response) => {
        const json = JSON.parse(JSON.stringify(response));
        console.log(json);
        if (json === true) {
          console.log('Enter');
        } else {
          console.log('Pop-up username password not correct');
        }
        const user = new User(1, 'asd');

        return new UserData('token', user);
      });
  }

  logUserIn(userData: UserData): void {
    sessionStorage.setItem('token', userData.token);
    sessionStorage.setItem('person', userData.user.username);
    sessionStorage.setItem('id', userData.user.id.toString());

    this.router.navigate(['/dashboard']);
  }
}
