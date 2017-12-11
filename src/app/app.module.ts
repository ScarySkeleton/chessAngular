import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import LogoComponent from '../shared/components/logo/logo.component';
import NavComponent from '../shared/components/nav/nav.component';
import TabComponent from '../shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
