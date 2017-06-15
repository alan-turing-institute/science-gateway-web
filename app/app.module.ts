import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { FormsModule }   from '@angular/forms';
import { DisplayComponent }   from './display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent , DisplayComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }