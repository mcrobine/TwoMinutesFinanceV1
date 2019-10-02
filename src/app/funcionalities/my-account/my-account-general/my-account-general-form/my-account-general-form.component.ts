import { Component, OnInit } from '@angular/core';
import { MyAccountGeneralService } from '../services/my-account-general.service';
@Component({
  selector: 'app-my-account-general-form',
  templateUrl: './my-account-general-form.component.html',
  styleUrls: ['./my-account-general-form.component.css']
})
export class MyAccountGeneralFormComponent implements OnInit {

  constructor(
    private service : MyAccountGeneralService
  ) { }

  ngOnInit() {
    this.service.getUserById(parseInt(sessionStorage.getItem("userId"), 10))

  }

}
