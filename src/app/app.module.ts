import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule } from '@angular/material';
import { MatSidenavModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataDashComponent } from './data-dash/data-dash.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { FormIncomeComponent } from './form-income/form-income.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { RegisterComponent } from './register/register.component';
import { LoginToolbarComponent } from './login-toolbar/login-toolbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataDashComponent,
    MainToolbarComponent,
    FormIncomeComponent,
    FormHeaderComponent,
    FormToolbarComponent,
    RegisterComponent,
    LoginToolbarComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
