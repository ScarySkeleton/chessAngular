import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {IAppState} from 'interfaces/IAppState';
import {IRegisterState} from 'app/auth/register/register.reducer';
import * as globalAction from 'global/global.action';
import * as registerAction from 'app/auth/register/register.action';

@Injectable()
export class RegisterService {

  public readonly register$: Observable<IRegisterState> = this.store;

  constructor(private store: Store<IAppState>) { }

  register(data) {
    this.store.dispatch(globalAction.isFetching());
    this.store.dispatch(registerAction.registerRequest(data));
  }
}
