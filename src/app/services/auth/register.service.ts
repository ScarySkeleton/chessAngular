import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {IAppState} from 'interfaces/IAppState';
import {IRegisterState} from 'shared/interfaces/IRegisterState'
import * as registerAction from 'app/auth/register/register.action';

@Injectable()
export class RegisterService {

  public readonly register$: Observable<IRegisterState> = this.store;

  constructor(private store: Store<IAppState>) { }

  register(data): void {
    this.store.dispatch(registerAction.registerRequest(data));
  }
}
