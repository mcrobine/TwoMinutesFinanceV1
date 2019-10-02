import {Injectable} from '@angular/core';
import {CONFIG} from '../../../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MyAccountGeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  getUserById(id: number){
    //Get user info
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders()
     .set("Authorization", "Bearer " + token);
    return this.http.get(`${CONFIG.API_URL + 'users/' + id}`, {headers})
     .toPromise()
     .then((response) => {
       return JSON.parse(JSON.stringify(response))
     })
  }
}
