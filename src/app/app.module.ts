import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDialogModule
} from '@angular/material';
import {MatSidenavModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatListModule} from '@angular/material';

//import {AuthGuard} from './guards/auth.guard.ts';

import {AppComponent} from './app.component';
import {DataDashComponent} from './util/data-dash/data-dash.component';
import {MainToolbarComponent} from './util/main-toolbar/main-toolbar.component';
import {FormIncomeComponent} from './funcionalities/form-income/form-income.component';
import {FormHeaderComponent} from './util/form-header/form-header.component';
import {FormToolbarComponent} from './util/form-toolbar/form-toolbar.component';

import {RouterModule} from '@angular/router';
import {ROUTES} from './routes/routes';
import {LoginComponent} from './funcionalities/login/login-form/login.component';
import {LoginToolbarComponent} from './funcionalities/login/login-form/login-toolbar/login-toolbar.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './funcionalities/login/services/auth.service';
import {LoginHeaderComponent} from './funcionalities/login/login-form/login-header/login-header.component';

import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './funcionalities/dashboard/dashboard.component';
import {CreateAcountComponent} from './funcionalities/login/create-account-form/create-acount.component';
import {CreateAccountHeaderComponent} from './funcionalities/login/create-account-form/create-account-header/create-account-header.component';
import {CreateAccountToolbarComponent} from './funcionalities/login/create-account-form/create-account-toolbar/create-account-toolbar.component';
import {LoginFailedDialogComponent} from './funcionalities/login/login-form/login-failed-dialog/login-failed-dialog.component';
import {NewAccountFailedDialogComponent} from './funcionalities/login/create-account-form/new-account-failed-dialog/new-account-failed-dialog.component';
import {NewAccountSuccessDialogComponent} from './funcionalities/login/create-account-form/new-account-success-dialog/new-account-success-dialog.component';
import {AuthGuard} from './guards/AuthGuard';
import {AuthedGuard} from './guards/AuthedGuard';
import { SystemConfigComponent } from './funcionalities/system-config/system-config.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SystemConfigNavComponent } from './funcionalities/system-config/system-config-nav/system-config-nav.component';

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
    LoginFailedDialogComponent,
    NewAccountFailedDialogComponent,
    NewAccountSuccessDialogComponent,
    SystemConfigComponent,
    SystemConfigNavComponent,
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
    MatCheckboxModule,
    MatDialogModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthService,
    HttpClientModule,
    AuthGuard,
    AuthedGuard],
  entryComponents: [
    LoginFailedDialogComponent,
    NewAccountFailedDialogComponent,
    NewAccountSuccessDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
