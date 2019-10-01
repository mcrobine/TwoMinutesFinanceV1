import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-account-nav',
  templateUrl: './my-account-nav.component.html',
  styleUrls: ['./my-account-nav.component.css']
})
export class MyAccountNavComponent implements OnInit {

  constructor(
  private router: Router
  ) { }

  ngOnInit() {
  }

  onGeneralClick(){
    this.router.navigate(['/my-account/general']);
  }

}
