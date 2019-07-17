import {RegisterComponent} from '../register/register.component';
import {FormIncomeComponent} from '../form-income/form-income.component';

export const ROUTES = [
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'feature/income',
    component: FormIncomeComponent
  }
];
