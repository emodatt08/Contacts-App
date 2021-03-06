import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent }  from './component/user.component';
import { AppComponent }  from './app.component';
import {AboutComponent} from './component/about.component'
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, UserComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
