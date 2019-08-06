import {Component, Injectable, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login-failed-dialog',
  templateUrl: './login-failed-dialog.component.html',
  styleUrls: ['./login-failed-dialog.component.css']
})
@Injectable()
export class LoginFailedDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onDialogOpen() {
    const dialogRef = this.dialog.open(LoginFailedDialogComponent, {
      width: '250px'
    });
  }

  onCloseDialog() {
    const dialogRef = this.dialog.closeAll();
  }
}
