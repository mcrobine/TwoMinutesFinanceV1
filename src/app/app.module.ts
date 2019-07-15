import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataDashComponent } from './data-dash/data-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
