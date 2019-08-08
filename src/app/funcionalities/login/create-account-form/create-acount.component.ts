import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent implements OnInit {

  userPassword: string;
  verifyPassword: string;

  constructor(
    private authService: AuthService,
  ) {
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

  onSubmit(form) {
    console.log(form.value);
    this.authService.createAccount(form.value);
  }
}
