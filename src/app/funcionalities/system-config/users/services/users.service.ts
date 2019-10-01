import {Injectable} from '@angular/core';
import {CONFIG} from '../../../../config/config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  getUsers(){
  console.log('calling back-end');
  return this.http.get(`${CONFIG.API_URL + 'users/'}`, {})
        .toPromise()
        .then((response) => {
          const json = JSON.parse(JSON.stringify(response));
          const success = json.success;
          if (success) {
           return json.content
          } else {
           return success
          }
        });
  }

}
