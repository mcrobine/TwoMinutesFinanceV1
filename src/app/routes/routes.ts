import {LoginComponent} from '../funcionalities/login/login-form/login.component';
import {FormIncomeComponent} from '../funcionalities/form-income/form-income.component';
import {DashboardComponent} from '../funcionalities/dashboard/dashboard.component';
import {CreateAcountComponent} from '../funcionalities/login/create-account-form/create-acount.component';
import {AuthGuard} from '../guards/AuthGuard';
import {AuthedGuard} from '../guards/AuthedGuard';

export const ROUTES = [{
  path: 'auth/login',
  component: LoginComponent,
  canActivate: [AuthedGuard],
}, {
  path: 'auth/create-account',
  component: CreateAcountComponent,
  canActivate: [AuthedGuard],
}, {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
}, {
  path: 'feature/income',
  component: FormIncomeComponent,
  canActivate: [AuthGuard],
}];
