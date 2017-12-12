import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import appRoute from './app-route.component';
// Components
import { AppComponent } from './app.component';
import { LogoComponent } from 'shared/components/logo/logo.component';
import { NavComponent } from 'shared/components/nav/nav.component';
import { TabComponent } from 'shared/components/tab/tab.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    TabComponent,
    AboutComponent,
    HomeComponent,
    DefaultComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true } // only for debugg
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
