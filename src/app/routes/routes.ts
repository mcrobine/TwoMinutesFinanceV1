import {LoginComponent} from '../login/login-form/login.component';
import {FormIncomeComponent} from '../funcionalities/form-income/form-income.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CreateAcountComponent} from '../login/create-account/create-acount.component';

export const ROUTES = [{
    path: 'auth/login',
    component: LoginComponent
  }, {
    path: 'feature/income',
    component: FormIncomeComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'auth/create-account',
    component: CreateAcountComponent
  }
];
