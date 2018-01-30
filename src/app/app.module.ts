import {environment} from 'environments/environment';

/*
  Route
*/
import appRoute from 'app/app-route.component';
//import appAuthRoute from 'app/route/app-route-auth.component';
//import appNonAuthRoute from 'app/route/app-route-nonauth.component';
// Common
import {AppComponent} from './app.component';
// Components
import {LogoComponent} from 'shared/components/logo/logo.component';
import {NavComponent} from 'shared/components/nav/nav.component';
import {TabComponent} from 'shared/components/tab/tab.component';
import {UsersComponent} from 'shared/components/users/users.component';
import {UserComponent} from 'shared/components/users/user/user.component';
import {PopupComponent} from 'shared/components/popup/popup.component';
import {ErrorComponent} from 'shared/components/popup/error/error.component';
import {SuccessComponent} from '../shared/components/popup/success/success.component';
import {SpinnerComponent} from 'shared/components/spinner/spinner.component';
import {IDynamicPopupComponent} from 'shared/interfaces/IDynamicPopupComponent';
import {GreedingComponent} from 'app/components/home/greeding/greeding.component';
// Auth
import {NavAuthComponent} from 'shared/components/nav/nav-auth/nav-auth.component';
import {NavNonAuthComponent} from 'shared/components/nav/nav-nonauth/nav-nonauth.component';
import {LogoutComponent} from 'app/auth/logout/logout.component';
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
import {NavigateService} from 'shared/services/navigate.service';
import {SessionService} from 'shared/services/session.service';
import {RegisterService} from 'app/auth/register/register.service';
import {LoginService} from 'app/auth/login/login.service';
import {LogoutService} from 'app/auth/logout/logout.service';
import {FireBaseService} from 'shared/services/firebase.service';
import {HomeService} from 'app/components/home/home.service';
// Authorization serives
import {AuthService} from 'shared/services/auth.service';
import {AuthGuardService} from 'shared/services/auth.guard.service';
import {NonAuthGuardService} from 'shared/services/nonauth.guard.service';

/*
  Directives
*/
import {AnchorDirective} from 'shared/directives/AnchorDirective';

/* 
  Pipe
*/
import {ToArrayPipe} from 'shared/pipes/toArray.pipe';
import {CreateComponentPipe} from 'shared/pipes/createComponent.pipe';

/* 
  Effects  
*/
import {RegisterEffect} from 'app/auth/register/register.effects';
import {LoginEffect} from 'app/auth/login/login.effects';
import {HomeEffect} from 'app/components/home/home.effect';

/* 
  Reducers
*/
import {globalReducer} from 'shared/store/global.reducer';
import {registerReducer} from 'app/auth/register/register.reducer';
import {loginReducer} from 'app/auth/login/login.reducer';
import {popupReducer} from 'shared/components/popup/popup.reducer';
import {sessionReducer} from 'shared/session/session.reducer';
//Materials 
import {MaterialModule} from './material.module';

/*
  NPM libs
*/
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
// Auth
import {CookieService} from 'ngx-cookie-service';
// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // Common
    AppComponent,
    // Components
    LogoComponent,
    NavComponent,
    TabComponent,
    UsersComponent,
    UserComponent,  
    PopupComponent,
    ErrorComponent,
    SuccessComponent,
    GreedingComponent,
    // Auth 
    NavAuthComponent,
    NavNonAuthComponent,     
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    // Containers
    HomeComponent,
    AboutComponent,
    DefaultComponent,
    PageNotFoundComponent,
    // Derictives
    AnchorDirective,
    SpinnerComponent,
    // Pipes
    ToArrayPipe,
    CreateComponentPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Routing
    appRoute,
    //appAuthRoute,
    //appNonAuthRoute,
    // Reducers
    StoreModule.forRoot({
      global: globalReducer,
      popup: popupReducer,
      register: registerReducer,
      login: loginReducer,
      session: sessionReducer,
    }),
    StoreDevtoolsModule.instrument({
       maxAge: 25
    }), // Store dev tools
    // Effects
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
      HomeEffect,
    ]),
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // EFFECTS
    //EffectsModule.run()
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    Actions,
    GlobalService,
    DispatchService,
    NavigateService,
    SessionService,
    RegisterService,
    LoginService,
    LogoutService,
    FireBaseService,
    AuthService,
    AuthGuardService,
    NonAuthGuardService,
    CookieService,
    HomeService,
  ],
  // For dynamic components
  entryComponents: [ErrorComponent, GreedingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
