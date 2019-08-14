import {LoginComponent} from '../funcionalities/login/login-form/login.component';
import {FormIncomeComponent} from '../funcionalities/form-income/form-income.component';
import {DashboardComponent} from '../funcionalities/dashboard/dashboard.component';
import {CreateAcountComponent} from '../funcionalities/login/create-account-form/create-acount.component';
import {AuthGuard} from '../guards/AuthGuard';
import {AuthedGuard} from '../guards/AuthedGuard';
import {SystemConfigComponent} from '../funcionalities/system-config/system-config.component';
import {PageNotFoundComponent} from '../util/page-not-found/page-not-found.component';

export const ROUTES = [{
  path: '404',
  component: PageNotFoundComponent,
}, {
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
  path: 'system-config',
  component: SystemConfigComponent,
  canActivate: [AuthGuard],
}, {
  path: 'feature/income',
  component: FormIncomeComponent,
  canActivate: [AuthGuard],
}, {
  path: '',
  redirectTo: 'auth/login',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '404'
}];
