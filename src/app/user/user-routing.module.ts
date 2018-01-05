import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserHomeComponent} from 'app/user/user-home/user-home.component';
import {AuthGuardService} from 'shared/services/auth.guard.service';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
