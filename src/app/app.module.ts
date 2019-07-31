import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatCheckboxModule} from '@angular/material';
import { MatSidenavModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataDashComponent } from './util/data-dash/data-dash.component';
import { MainToolbarComponent } from './util/main-toolbar/main-toolbar.component';
import { FormIncomeComponent } from './funcionalities/form-income/form-income.component';
import { FormHeaderComponent } from './util/form-header/form-header.component';
import { FormToolbarComponent } from './util/form-toolbar/form-toolbar.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { LoginComponent } from './login/login-form/login.component';
import { LoginToolbarComponent } from './login/login-form/login-toolbar/login-toolbar.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/login-form/services/auth.service';
import { LoginHeaderComponent } from './login/login-form/login-header/login-header.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAcountComponent } from './login/create-account/create-acount.component';
import { CreateAccountHeaderComponent } from './login/create-account/create-account-header/create-account-header.component';
import { CreateAccountToolbarComponent } from './login/create-account/create-account-toolbar/create-account-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DataDashComponent,
    MainToolbarComponent,
    FormIncomeComponent,
    FormHeaderComponent,
    FormToolbarComponent,
    LoginComponent,
    LoginToolbarComponent,
    LoginHeaderComponent,
    DashboardComponent,
    CreateAcountComponent,
    CreateAccountHeaderComponent,
    CreateAccountToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [AuthService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
