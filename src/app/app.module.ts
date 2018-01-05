import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {Actions, EffectsModule} from '@ngrx/effects';
// FireBase
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
// Firebase: Database
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import {environment} from '../environments/environment';

import appRoute from './app-route.component';
// Common
import {AppComponent} from './app.component';
// Components
import {LogoComponent} from 'shared/components/logo/logo.component';
import {NavComponent} from 'shared/components/nav/nav.component';
import {TabComponent} from 'shared/components/tab/tab.component';
import {AuthComponent} from 'shared/components/auth/auth.component';
import {UsersComponent} from 'shared/components/users/users.component';
import {UserComponent} from 'shared/components/users/user/user.component';
import {PopupComponent} from 'shared/components/popup/popup.component';
import {ErrorComponent} from 'shared/components/popup/error/error.component';
import {SpinnerComponent} from 'shared/components/spinner/spinner.component';
// Auth
import {LogoutNavComponent} from 'shared/components/auth/logout-nav/logout-nav.component';
import {LogoutComponent} from 'app/auth/logout/logout.component';
import {LoginNavComponent} from 'shared/components/auth/login-nav/login-nav.component';
import {LoginComponent} from 'app/auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
// Containers
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {DefaultComponent} from './components/default/default.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
/* 
  Services
*/
import {GlobalService} from 'shared/services/global.service';
import {DispatchService} from 'shared/services/dispatch.service';
import {RegisterService} from 'services/auth/register.service';
import {LoginService} from 'app/auth/login/login.service';
import {FireBaseService} from 'shared/services/firebase.service';
// Authorization serives
import {AuthService} from 'shared/services/auth.service';
import {AuthGuardService} from 'shared/services/auth.guard.service';

/*
  Directives
*/
import {AnchorDirective} from 'shared/directives/AnchorDirective';

/* 
  Pipe
*/
import {ToArrayPipe} from 'shared/pipes/toArray.pipe';

/* 
  Effects  
*/
import {RegisterEffect} from 'app/auth/register/register.effects';
import {LoginEffect} from 'app/auth/login/login.effects';

/* 
  Reducers
*/
import {globalReducer} from 'shared/store/global.reducer';
import {registerReducer} from 'app/auth/register/register.reducer';
import {loginReducer} from 'app/auth/login/login.reducer';
import {popupReducer} from 'shared/components/popup/popup.reducer';

@NgModule({
  declarations: [
    // Common
    AppComponent,
    // Components
    LogoComponent,
    NavComponent,
    TabComponent,
    AuthComponent,
    UsersComponent,
    UserComponent,  
    PopupComponent,
    ErrorComponent,
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
    // Derictives
    AnchorDirective,
    SpinnerComponent,
    // Pipes
    ToArrayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoute, // Routing
    // Reducers
    StoreModule.forRoot({
      global: globalReducer,
      popup: popupReducer,
      register: registerReducer,
      login: loginReducer,
    }),
    StoreDevtoolsModule.instrument({
       maxAge: 25
    }), // Store dev tools
    // Effects
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
    ]),
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // EFFECTS
    //EffectsModule.run()
  ],
  providers: [
    Actions,
    GlobalService,
    DispatchService,
    RegisterService,
    LoginService,
    FireBaseService,
    AuthService,
    AuthGuardService
  ],
  // For dynamic components
  entryComponents: [ErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
