import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PopupDialog} from '../../pop-up-dialog/services/pop-up-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class MainToolbarServiceService {

  constructor(
    private router: Router,
    private popUpDialog: PopupDialog
  ) {
  }

  logout() {
    const title = 'Warning';
    const message = 'Are you sure you want to log out?';
    const okBtn = 'Log out';
    const cancelBtn = 'Stay';
    this.popUpDialog.simplePopupOpen(title, message, okBtn, cancelBtn, '300px')
  }

  systemConfig() {
    this.router.navigate(['system-config']);
  }
}
