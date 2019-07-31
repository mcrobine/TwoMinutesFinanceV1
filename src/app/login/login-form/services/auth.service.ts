import {Injectable} from '@angular/core';
import {CONFIG} from '../../../config/config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserData} from '../../../classes/UserData';
import {UserLoggedIn} from '../../../classes/User';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  login(loginEntered: string, passwordEntered: string): Promise<UserLoggedIn> {
    return this.http.post(`${CONFIG.API_URL + 'users/login'}`, {username: loginEntered, password: passwordEntered})
      .toPromise()
      .then((response) => {
        const json = JSON.parse(JSON.stringify(response));
        if (!json) {
          console.log('Not enter');
        } else {
          console.log('Enter');
        }

        const userLoggedIn = new UserLoggedIn(true, new UserData(json.id, json.username));
        return (userLoggedIn);
      });
  }

  logUserIn(userLoggedIn: UserLoggedIn): void {
    sessionStorage.setItem('username', userLoggedIn.user.username);
    sessionStorage.setItem('id', userLoggedIn.user.userId.toString());

    this.router.navigate(['/dashboard']);
  }
}
