import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {Actions, EffectsModule} from '@ngrx/effects';
// FireBase
// import {AngularFireModule} from 'angularfire2';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
// Firebase: Database
// import {AngularFireDatabaseModule} from 'angularfire2/database';
// import {AngularFireDatabase} from 'angularfire2/database';

import {environment} from '../environments/environment';

import appRoute from './app-route.component';
// Common
import { AppComponent } from './app.component';
// Components
import { LogoComponent } from 'shared/components/logo/logo.component';
import { NavComponent } from 'shared/components/nav/nav.component';
import { TabComponent } from 'shared/components/tab/tab.component';
import { AuthComponent } from 'shared/components/auth/auth.component';
// import {UsersComponent} from 'shared/components/users/users.component';
// import {UserComponent} from 'shared/components/users/user/user.component';
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
import {GlobalService} from 'global/global.service';
import {RegisterService} from 'services/auth/register.service';
// Effects 
import {RegisterEffect} from 'app/auth/register/register.effects';
// Reducers
import {globalReducer} from 'global/global.reducer';
import  {registerReducer} from 'app/auth/register/register.reducer.ts';

@NgModule({
  declarations: [
    // Common
    AppComponent,
    // Components
    LogoComponent,
    NavComponent,
    TabComponent,
    AuthComponent,
    // UsersComponent,
    // UserComponent,  
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
    appRoute, // Routing
    StoreModule.forRoot({
      global: globalReducer,
      register: registerReducer
    }),
    StoreDevtoolsModule.instrument({
       maxAge: 25
    }), // Store dev tools
    EffectsModule.forRoot([
      RegisterEffect
    ]),
    // FIREBASE
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireDatabaseModule
  ],
  providers: [
    Actions,
    GlobalService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
