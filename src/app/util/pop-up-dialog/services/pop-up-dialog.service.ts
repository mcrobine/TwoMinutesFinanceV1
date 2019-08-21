import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PopUpDialogComponent} from '../pop-up-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopupDialog {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  simplePopupOpen(title: string, message: string, okBtn: string, cancelBtn: string, width: string) {
    this.dialog.open(PopUpDialogComponent, {
      width,
      data: {
        message,
        title,
        okBtn,
        cancelBtn,
      }
    });
  }
}
