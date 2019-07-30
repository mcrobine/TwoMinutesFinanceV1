import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent implements OnInit {

  userPassword: string;
  verifyPassword: string;

  constructor() {
  }

  ngOnInit() {
  }

  onPasswordVerif() {
    if (this.userPassword && this.verifyPassword) {
      if (!(this.userPassword === this.verifyPassword)) {
        console.log('Invalid verifyPassword');
      } else {
        console.log('Good verifyPassword');
      }
    }
  }
}
