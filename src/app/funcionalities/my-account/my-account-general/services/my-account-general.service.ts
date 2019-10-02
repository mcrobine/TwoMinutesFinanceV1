import {Injectable} from '@angular/core';
import {CONFIG} from '../../../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserData } from '../../../../classes/UserData';

@Injectable()
export class MyAccountGeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  getUserById(id: number): Promise<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders()
     .set("Authorization", "Bearer " + token);
    return this.http.get(`${CONFIG.API_URL + 'users/' + id}`, {headers})
     .toPromise()
     .then((response) => {
       return JSON.parse(JSON.stringify(response));
     })
  }

  saveForm(userData): Promise<any>  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders()
     .set("Authorization", "Bearer " + token);
    debugger;
    return this.http.post(`${CONFIG.API_URL + 'users/save'}`, JSON.parse(JSON.stringify(userData)), {headers})
     .toPromise()
     .then((response) => {
       return JSON.parse(JSON.stringify(response));
     })
  }
}
