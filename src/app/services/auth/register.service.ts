import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Store} from '@ngrx/store';

import {IAction} from 'abstract/Action';
import * as globalAction from 'shared/globalState/globalState.action';
import * as registerAction from 'app/auth/register/register.action';

@Injectable()
export class RegisterService {

  private _data = new Subject<any>();
  public data = this._data.asObservable();

  constructor(private store: Store<IAction>) { }

  getData() {
    return this.data;
  }

  setData(data) {
    this._data.next(data);
    this.store.dispatch(globalAction.isFetching());
    this.store.dispatch(registerAction.registerRequest(data));
  }

}
