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
  ) {}

  login(loginEntered: string, passwordEntered: string): Promise<UserData> {
    return this.http.post(`${CONFIG.API_URL}`, {login: loginEntered,  senha: passwordEntered})
      .toPromise()
      .then((response) => {
        let json = JSON.parse(JSON.stringify(response));

        let token = json.content.token;

        let user = new User();
        user.id = json.content.id;
        user.person = json.content.pessoa;

        let userData = new UserData(token, user);

        return userData;
      });
  }

  logUserIn(userData: UserData): void {
    sessionStorage.setItem('token', userData.token);
    sessionStorage.setItem('person', userData.user.person);
    sessionStorage.setItem('id', userData.user.id.toString());

    this.router.navigate(['/dashboard']);
  }
}
