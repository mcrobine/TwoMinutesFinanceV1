import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-account-success-dialog',
  templateUrl: './new-account-success-dialog.component.html',
  styleUrls: ['./new-account-success-dialog.component.css']
})
export class NewAccountSuccessDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onReturnToLogin(){
    this.router.navigate(['auth/login']);
    this.dialog.closeAll();
  }
}
