import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system-config-nav',
  templateUrl: './system-config-nav.component.html',
  styleUrls: ['./system-config-nav.component.css']
})
export class SystemConfigNavComponent implements OnInit {

  constructor(
  private router: Router,
  ) {}

  ngOnInit() {
  }

  onUsersClick(){
    this.router.navigate(['/system-config/users']);
  }
}
