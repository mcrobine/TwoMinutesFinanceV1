import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LogOutPopupComponent} from '../log-out-popup/log-out-popup.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MainToolbarServiceService {

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {
  }

  logout() {
    this.dialog.open(LogOutPopupComponent, {
      width: '300px',
    });
  }

  systemConfig() {
    this.router.navigate(['system-config']);
  }

  myAccount(){
    this.router.navigate(['my-account']);
  }
}
