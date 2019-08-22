import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-out-popup',
  templateUrl: './log-out-popup.component.html',
  styleUrls: ['./log-out-popup.component.css']
})
export class LogOutPopupComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogoutTap(){
    this.dialog.closeAll();
    sessionStorage.clear();
    this.router.navigate(['auth/login']);
  }

  onReturnTap(){
    this.dialog.closeAll();
  }
}
