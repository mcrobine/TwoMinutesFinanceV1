import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../funcionalities/dashboard/services/dashboard.service';
import {MainToolbarServiceService} from './service/main-toolbar-service.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {

  constructor(
    private mainToolbarServiceService: MainToolbarServiceService
  ) {
  }

  ngOnInit() {
  }

  onLogoutBtnTap() {
    this.mainToolbarServiceService.logout();
  }

  onConfigurationBtnTap(){
    this.mainToolbarServiceService.systemConfig();
  }

}
