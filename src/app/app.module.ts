import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'ng-sidebar';
import { ViewinfraComponent } from './viewinfra/viewinfra.component';
import { HttpClientModule } from '@angular/common/http';
import * as $ from "jquery";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewinfraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[ViewinfraComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
