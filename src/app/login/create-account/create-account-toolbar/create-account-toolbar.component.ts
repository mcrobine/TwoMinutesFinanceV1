import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account-toolbar',
  templateUrl: './create-account-toolbar.component.html',
  styleUrls: ['./create-account-toolbar.component.css']
})
export class CreateAccountToolbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['auth/login']);
  }
}
