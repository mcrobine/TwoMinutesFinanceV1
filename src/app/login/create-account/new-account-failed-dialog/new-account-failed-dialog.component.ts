import {Component, Injectable, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-account-failed-dialog',
  templateUrl: './new-account-failed-dialog.component.html',
  styleUrls: ['./new-account-failed-dialog.component.css']
})
export class NewAccountFailedDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onCloseDialog() {
    const dialogRef = this.dialog.closeAll();
  }
}
