import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private service: UsersService,
  ) { }

  ngOnInit() {
   this.service.getUsers()
  }

}
