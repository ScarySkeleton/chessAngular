import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import appRoute from './app-route.component';
// Common
import { AppComponent } from './app.component';
// Components
import { LogoComponent } from 'shared/components/logo/logo.component';
import { NavComponent } from 'shared/components/nav/nav.component';
import { TabComponent } from 'shared/components/tab/tab.component';
import { AuthComponent } from 'shared/components/auth/auth.component';
// Auth
import { LogoutNavComponent } from 'shared/components/auth/logout-nav/logout-nav.component';
import { LogoutComponent } from 'app/auth/logout/logout.component';
import { LoginNavComponent } from 'shared/components/auth/login-nav/login-nav.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// Containers
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './components/default/default.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Services
import { RegisterService } from 'services/auth/register.service';
// Reducers
import {globalReducer} from 'shared/globalState/globalState.reducer';
import  { registerReducer } from 'app/auth/register/register.reducer.ts';

@NgModule({
  declarations: [
    // Common
    AppComponent,
    // Components
    LogoComponent,
    NavComponent,
    TabComponent,
    AuthComponent,
    // Auth 
    LogoutNavComponent,
    LogoutComponent,
    LoginNavComponent, 
    LoginComponent,
    RegisterComponent,
    // Containers
    AboutComponent,
    HomeComponent,
    DefaultComponent,
    PageNotFoundComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      global: globalReducer,
      register: registerReducer
    }),
    appRoute, // Routing
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25
    // }) // Store dev tools 
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
