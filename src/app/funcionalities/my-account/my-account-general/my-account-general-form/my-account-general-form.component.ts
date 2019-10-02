import { Component, OnInit } from '@angular/core';
import { MyAccountGeneralService } from '../services/my-account-general.service';
import { UserData } from '../../../../classes/UserData';

@Component({
  selector: 'app-my-account-general-form',
  templateUrl: './my-account-general-form.component.html',
  styleUrls: ['./my-account-general-form.component.css']
})
export class MyAccountGeneralFormComponent implements OnInit {

  userData: UserData

  constructor(
    private service : MyAccountGeneralService,
  ) { }

  ngOnInit() {
    this.service.getUserById(parseInt(sessionStorage.getItem("userId"), 10))
      .then((response) => {
        if (response.success  == true) {
           console.log('good request');
           this.userData = response.content;
        } else {
          console.log('Error Popup')
        }
      });
  }

  onSaveBtnTap() {
    this.service.saveForm(this.userData)
      .then((response) => {
        if (response.success  == true) {
           console.log('save success');
        } else {
          console.log('Error Popup')
        }
      });
  }
}
