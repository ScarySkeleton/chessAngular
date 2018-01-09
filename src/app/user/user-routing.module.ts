import {UserHomeComponent} from 'app/user/user-home/user-home.component';
import {AuthGuardService} from 'shared/services/auth.guard.service';
// import UserNonAuthRoute from 'app/route/app-route-nonauth.component';
// import UserAuthRoute from 'app/route/app-route-auth.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // UserAuthRoute,
    // UserNonAuthRoute
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
